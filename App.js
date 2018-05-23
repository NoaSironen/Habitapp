import React, {Component} from 'react';
import { StyleSheet, TextInput, Platform, Image, Text, View, Navigator, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase';
<<<<<<< HEAD
import { DrawerMenu } from './components/Router';
=======
import { CustomDrawer } from './components/Router';
>>>>>>> 35e80c7c9361333b9b09993047919decbc36eed5

export default class App extends Component {
  render() {
    return (
<<<<<<< HEAD
        <DrawerMenu/>
=======
        <CustomDrawer/>
>>>>>>> 35e80c7c9361333b9b09993047919decbc36eed5
    );
  }
}
