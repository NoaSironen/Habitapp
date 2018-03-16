import React from 'react';
import { Icon } from 'react-native-elements';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import Home from "./Home";
import AddWorker from './AddWorker';
import ChooseRegistration from './ChooseRegistration';
import LogInScreen from './LogInScreen';
import RegisterUserProfile from './RegisterUserProfile';
import RegisterUserPaymentCard from './RegisterUserPaymentCard';

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
          title: '1 av 3',
      }
    },
    LogInScreen: { 
      screen: LogInScreen,
      navigationOptions: {
          title: 'Log In',
      }
    },
    RegisterUserProfile: { 
      screen: RegisterUserProfile,
      navigationOptions: {
          title: '2 av 3',
      }
    },
    RegisterUserPaymentCard: { 
      screen: RegisterUserPaymentCard,
      navigationOptions: {
          title: '3 av 3',
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