import React, {Component} from 'react';
import { StyleSheet, TextInput, Platform, Image, Text, View, Navigator, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import {StackNavigator} from 'react-navigation';
import AddWorker from './AddWorker';


export default class ChooseRegistration extends Component {
/*   static navigationOptions = {
    title: 'ChooseRegistration',
  }; */

  render() {

    return (

      <View>
        <Text style={styles.headerStyle}>Choose Registration</Text>

      </View>
    );
  }

  
}

const styles = StyleSheet.create({

  container: {
  
      margin: 20,
  },
  inputStyle: {
      height: 60,
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 25,
      marginBottom: 20,
     // paddingHorizontal: 10,
    //  backgroundColor: '#e5e6e8',

  },
  headerStyle: {
      textAlign: 'center',
      fontSize: 20,
      margin: 20,
  },
  buttonStyle: {
      
      alignItems: 'center',
      backgroundColor: '#275770',
      padding: 20,
  },
  buttonTextStyle: {
      color: '#FFFFFF',
      fontSize: 25,
  }
}) 