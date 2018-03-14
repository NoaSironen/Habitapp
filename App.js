import React from 'react';
import { StyleSheet, TextInput, Platform, Image, Text, View, Navigator, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase';
import {StackNavigator, DrawerNavigator, NavigationAction} from 'react-navigation';

import ChooseRegistration from './components/ChooseRegistration';
import AddWorker from './components/AddWorker';
import Home from './components/Home';

const StackNavigation = StackNavigator ({
  Home: { screen: Home },
  AddWorker: { screen: AddWorker },
  //ChooseRegistration: { ChooseRegistration },
}, { 
  headerMode: 'none'
});

const Navigation = DrawerNavigator({
  Home: { 
    screen: Home,
    navigationOptions: {
      title: 'Home', // Header title
    }
  },
  AddWorker: { 
    screen: AddWorker,
    title: 'Add Worker',
  },
  ChooseRegistration: { 
    screen: ChooseRegistration,
    title: 'Choose Registraton',
  },
});

class MyHomeScreen extends React.Component {

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('AddWorker')}
        title="Go to notifications"
      />
    );
  }
}

export default Navigation;