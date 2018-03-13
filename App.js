import React from 'react';
import { StyleSheet, TextInput, Platform, Image, Text, View, Navigator, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase';
import {StackNavigator, DrawerNavigator} from 'react-navigation';
import ChooseRegistration from './components/ChooseRegistration';
import AddWorker from './components/AddWorker';
import Home from './components/Home';

const Navigation = DrawerNavigator({
  Home: { screen: Home},
  AddWorker: { screen: AddWorker},
  ChooseRegistration: { screen: ChooseRegistration},
}, {
  // Default config for all screens
  headerMode: 'float',
  initialRouteName: 'Home', // The first screen to show up when the app starts, should be loging or home.
});


export default Navigation;