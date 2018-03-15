import React, {Component} from 'react';
import { StyleSheet, TextInput, Platform, Image, Text, View, Navigator, TouchableOpacity, TouchableHighlight} from 'react-native';
import firebase from 'react-native-firebase';
// import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import {StackNavigator} from 'react-navigation';
import AddWorker from './AddWorker';
import ChooseRegistration from './ChooseRegistration';



export default class LogInScreen extends Component {
      constructor(props) {
      super(props);
      this.unsubscriber = null;
      this.state = {
        isAuthenticated: false,
        typedEmail: '',
        typedPassword: '',
        user: null,

      };
    } 

    onLogin = () => {
      firebase.auth().signInAndRetrieveDataWithEmailAndPassword(this.state.typedEmail, this.state.typedPassword)
      .then((loggedInUser) => {
        this.setState({user: loggedInUser})
        console.log('Register with user : ${JSON.stringify(loggedInUser.toJSON())}');
      }).catch = (error) => {
        console.log('Register failed with error: ${error}');
      };
    }

  render() {
    const { navigate } = this.props.navigation;
    return (

      <View>
        <Text style={styles.headerStyle}>Choose Registration</Text>
                  
                   <TextInput style={styles.inputStyle} 
                        placeholder='Fyll i din E-postadress' 
                        returnKeyType='next'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        underlineColorAndroid='transparent'
                        onChangeText={
                            (text) => {
                                this.setState({ typedEmail: text });
                            }
                        }
                    />

                   <TextInput style={styles.inputStyle} 
                        placeholder='Fyll i ditt lösenord' 
                        keyboardType='default'
                        underlineColorAndroid='transparent'
                        secureTextEntry={true}
                        onChangeText={
                            (text) => {
                                this.setState({ typedPassword: text });
                            }
                        } 
                    /> 

                      <TouchableOpacity style={styles.buttonStyle}
                      onPress={this.onLogin}>  
                      <Text style={styles.buttonTextStyle}>Logga in</Text>
                      </TouchableOpacity>

                        <Text style={styles.headerStyle} onPress={() => navigate('ChooseRegistration')}>Registrera dig</Text>
      </View>
    );
  }

  
}

const styles = StyleSheet.create({

  container: {
  
     
  },
  inputStyle: {
      height: 70,
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 22,
      marginHorizontal: 40,
      marginVertical: 10,
      borderWidth: 1, 
      padding: 10,
      
      
     // paddingHorizontal: 10,
    //  backgroundColor: '#e5e6e8',

  },
  headerStyle: {
      textAlign: 'center',
      fontSize: 20,
      margin: 20,

  },
  buttonStyle: {
      marginHorizontal: 40,
      alignItems: 'center',
      backgroundColor: '#275770',
      padding: 20,
      marginVertical: 10,
  },
  buttonTextStyle: {
      color: '#FFFFFF',
      fontSize: 25,
  }
}) 