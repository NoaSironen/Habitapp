import React from 'react';
import { Icon } from 'react-native-elements';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import Home from "./Home";
import AddWorker from './AddWorker';
import ChooseRegistration from './ChooseRegistration';
import LogInScreen from './LogInScreen';

export const StackNav = StackNavigator ({
    Home: { 
      screen: Home,
      navigationOptions: {
          title: 'Home',
      }
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