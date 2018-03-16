import React from 'react';
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import Home from "./Home";
import AddWorker from './AddWorker';
import ChooseRegistration from './ChooseRegistration';
import LogInScreen from './LogInScreen';

export const StackNav = StackNavigator ({
    Home: { 
      screen: Home,
      navigationOptions: ({ navigation }) => ({
          title: 'Home',
          params: navigation.state.params,
          headerLeft: (
            <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')} style={styles.HamburgerButton}>
              <Image source={require('../images/HamburgerIcon.png')}/>
            </TouchableOpacity>
          )
      })
    },
    AddWorker: { 
      screen: AddWorker,
      navigationOptions: {
          title: 'Add Worker',
      }
    },
    ChooseRegistration: { 
      screen: ChooseRegistration,
      navigationOptions: {
          title: 'Registration',
      }
    },
    LogInScreen: { 
      screen: LogInScreen,
      navigationOptions: {
          title: 'Log In',
      }
    },
  });

export const DrawerMenu = DrawerNavigator ({
    Home: { 
      screen: StackNav,
    },
    AddWorker: { 
      screen: AddWorker,
      navigationOptions: {
          title: 'Add Worker',
      }
    },
    ChooseRegistration: { 
      screen: ChooseRegistration,
      navigationOptions: {
          title: 'Registration'
      }
    },
    LogInScreen: { 
      screen: LogInScreen,
      navigationOptions: {
          title: 'Log In',
      }
    },
  });

  const styles = StyleSheet.create ({
    HamburgerButton: {
      paddingLeft: 10,
    }
  })