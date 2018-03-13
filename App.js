import React from 'react';
import { StyleSheet, TextInput, Platform, Image, Text, View, Navigator, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase';
import {StackNavigator} from 'react-navigation';
import ChooseRegistration from './components/ChooseRegistration';
import AddWorker from './components/AddWorker';
import Home from './components/Home';

const Navigation = StackNavigator({
  Home: { screen: Home},
  AddWorker: { screen: AddWorker},
  ChooseRegistration: { screen: ChooseRegistration},
})

export default class App extends React.Component {

  render() {
  return ( 
      <Navigation/>)
  }
}
