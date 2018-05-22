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
      title: 'Log In',
    }
  },
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: (
        <HamburgerButton navigation={navigation} />
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
      title: 'TILLBAKA',
    }
  },
  ChangeUserInfo: {
    screen: ChangeUserInfo,
    navigationOptions: {
      title: '',
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
      title: 'Välj profilbild'
    }
  },
});
// DrawerNavigator, nested stacknavigator inside so that you can navigate through the drawer to other screens
export const DrawerMenu = DrawerNavigator({

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
  ChangeUserInfo: {
    screen: ChangeUserInfo,
    navigationOptions: {
      title: '',
    }
  },
  LogOutScreen: {
    screen: LogInScreen,
    navigationOptions: {
      title: 'Log Out'
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
