import React, { Component } from 'react';
import { TouchableOpacity, View, Image, StyleSheet, Text } from 'react-native';
import { DrawerNavigator, StackNavigator, SafeAreaView, DrawerItems, ScrollView } from 'react-navigation'; // Remove SafeaAweaView & DrawerItems if CustomDrawerHeader is moved to seperate file!
import Home from "./Home";
import AddWorker from './AddWorker';
import ChooseRegistration from './ChooseRegistration';
import LogInScreen from './LogInScreen';
import RegisterUserProfile from './RegisterUserProfile';
import RegisterUserPaymentCard from './RegisterUserPaymentCard';
import CustomDrawer from './CustomDrawer';
import HamburgerButton from './HamburgerButton';
import ChangeUserInfo from './ChangeUserInfo';
import CreateNewUid from './CreateNewUid';
import ChangeUserPassword from './ChangeUserPassword';
import ProfilePicture from './ProfilePicture';

// Stacknavigation, keeps track of every screen.
const StackNav = StackNavigator({
  LogInScreen: {
    screen: LogInScreen,
    navigationOptions: {
      title: '',
    }
  },
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Hem',
      headerLeft: (
        <HamburgerButton navigation={navigation} />
      )
    })
  },
  AddWorker: {
    screen: AddWorker,
    navigationOptions: {
      title: 'Lägg till städare',
    }
  },
  ChooseRegistration: {
    screen: ChooseRegistration,
    navigationOptions: {
      title: '1 av 3',
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
  ChangeUserPassword: {
    screen: ChangeUserPassword,
    navigationOptions: {
      title: 'Ändra lösenord',
    }
  },
  ChangeUserInfo: {
    screen: ChangeUserInfo,
    navigationOptions: {
      title: 'Redigera profil',
    }
  },
  CreateNewUid: {
    screen: CreateNewUid,
    navigationOptions: {

    }
  },
  ProfilePicture: {
    screen: ProfilePicture,
    navigationOptions: {
      title: ''
    }
  },
});
// DrawerNavigator, nested stacknavigator inside so that you can navigate through the drawer to other screens
<<<<<<< HEAD
export const DrawerMenu = DrawerNavigator({
=======
export const CustomDrawer = DrawerNavigator({
>>>>>>> 35e80c7c9361333b9b09993047919decbc36eed5

  Home: {
    screen: StackNav,
  },
  AddWorker: {
    screen: AddWorker,
    navigationOptions: {
      title: 'Lägg till städare',
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
  ChangeUserInfo: {
    screen: ChangeUserInfo,
    navigationOptions: {
      title: '',
    }
  },
  LogOutScreen: {
    screen: LogInScreen,
    navigationOptions: {
      title: 'Logga ut'
    }
  },
}, {
    contentComponent: CustomDrawer,
    drawerWidth: 300,
  });

const styles = StyleSheet.create({
  DrawerHeader: {
    flex: 1,
  },
});
