import React, {Component} from 'react';
import { StyleSheet, TextInput, Platform, Image, Text, View, Navigator, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase';
import {StackNavigator} from 'react-navigation';
import AddWorker from './AddWorker';


export default class ChooseRegistration extends Component {

  render() {
    return (

      <View>
        <Text> Choose Registration</Text>
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