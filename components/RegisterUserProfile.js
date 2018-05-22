import React, { Component } from 'react';
import { StyleSheet, TextInput, Platform, Image, Text, View, Navigator, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import firebase from 'react-native-firebase';
import { StackNavigator } from 'react-navigation';
import AddWorker from './AddWorker';

export default class RegisterUserProfile extends Component {
  constructor(props) {
    super(props);
    this.unsubscriber = null;
    this.state = {
      typedEmail: this.props.navigation.state.params.typedEmail,
      typedPhoneNumber: this.props.navigation.state.params.typedPhoneNumber,
      typedPassword: this.props.navigation.state.params.typedPassword,
      typedFirstName: '',
      typedLastName: '',
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (

      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={styles.headerStyle}>SKAPA PROFIL</Text>

        <TextInput style={styles.inputStyle}
          placeholder='Förnamn'
          returnKeyType='next'
          keyboardType='default'
          onSubmitEditing={() => this.lastNameInput.focus()}
          onChangeText={
            (text) => {
              this.setState({ typedFirstName: text });
            }
          }
        />

        <TextInput style={styles.inputStyle}
          placeholder='Efternamn'
          returnKeyType='default'
          keyboardType='default'
          ref={(input) => this.lastNameInput = input}
          onChangeText={
            (text) => {
              this.setState({ typedLastName: text });
            }
          }
        />

        <View style={styles.buttonLayout}>
          <TouchableOpacity style={styles.buttonStyle}
            onPress={() => navigate('RegisterUserPaymentCard', {
              typedEmail: this.state.typedEmail,
              typedPassword: this.state.typedPassword,
              typedPhoneNumber: this.state.typedPhoneNumber,
              typedFirstName: this.state.typedFirstName,
              typedLastName: this.state.typedLastName
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