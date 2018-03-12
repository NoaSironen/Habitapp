import React from 'react';
import { StyleSheet, TextInput, Platform, Image, Text, View, Navigator, TouchableOpacity } from 'react-native';
import AddWorker from './components/AddWorker'
import firebase from 'react-native-firebase';



export default class App extends React.Component {


  render() {
    return (

      <View>
          <AddWorker/>
      </View>
    );
  }
}
