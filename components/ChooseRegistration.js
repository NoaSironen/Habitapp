import React, { Component } from 'react';
import { StyleSheet, TextInput, Platform, Image, Text, View, Navigator, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import firebase from 'react-native-firebase';
import { StackNavigator } from 'react-navigation';
import AddWorker from './AddWorker';

export default class ChooseRegistration extends Component {
  constructor(props) {
    super(props);
    this.unsubscriber = null;
    this.state = {
      isAuthenticated: false,
      typedEmail: '',
      typedPassword: '',
      user: null,
      typedPhoneNumber: '',
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (

      <KeyboardAvoidingView behavior='padding' style={styles.container}>
      
        <Text style={styles.headerStyle}>REGISTRERING</Text>

        <TextInput style={styles.inputStyle}
          placeholder='E-postadress'
          returnKeyType='next'
          keyboardType='email-address'
          autoCapitalize='none'
          onChangeText={
            (text) => {
              this.setState({ typedEmail: text });
            }
          }
        />
        <TextInput style={styles.inputStyle}
          placeholder='Mobilnummer'
          keyboardType='phone-pad'
          returnKeyType='next'
          onChangeText={
            (text) => {
              this.setState({ typedPhoneNumber: text });
            }
          }
        />

        <TextInput style={styles.inputStyle}
          placeholder='Lösenord'
          keyboardType='default'
          secureTextEntry={true}
          onChangeText={
            (text) => {
              this.setState({ typedPassword: text });
            }
          }
        />

        <View style={styles.buttonLayout}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigate('RegisterUserProfile', {
              typedEmail: this.state.typedEmail,
              typedPassword: this.state.typedPassword,
              typedPhoneNumber: this.state.typedPhoneNumber
            })}>
            <Text style={styles.buttonTextStyle}>NÄSTA</Text>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  inputStyle: {
    height: 70,
    fontSize: 22,
    marginHorizontal: 20,
    marginVertical: 3,
  },
  headerStyle: {
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
  },
  buttonStyle: {
    marginHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#161616',
    height: 75,
    width: 150,
    marginVertical: 20,
    borderRadius: 2,
  },
  buttonTextStyle: {
    marginVertical: 20,
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 22,
  },
  buttonLayout: {
    alignItems: 'flex-end',
  }
});