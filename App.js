import React, {Component} from 'react';
import { StyleSheet, TextInput, Platform, Image, Text, View, Navigator, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase';

import { DrawerMenu } from './components/Router';

export default class App extends Component {
  render() {
    return (
        <DrawerMenu/>
    );
  }
}
