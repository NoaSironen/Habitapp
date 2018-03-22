import React, {Component} from 'react';
import { TouchableOpacity, View, Image, StyleSheet, Text } from 'react-native';
import { DrawerNavigator, StackNavigator, SafeAreaView, DrawerItems, ScrollView  } from 'react-navigation'; // Remove SafeaAweaView & DrawerItems if CustomDrawerHeader is moved to seperate file!
import Home from "./Home";
import AddWorker from './AddWorker';
import ChooseRegistration from './ChooseRegistration';
import LogInScreen from './LogInScreen';
import RegisterUserProfile from './RegisterUserProfile';
import RegisterUserPaymentCard from './RegisterUserPaymentCard';
import DrawerHeader from './DrawerHeader';
import HamburgerButton from './HamburgerButton';


 const StackNav = StackNavigator ({
    Home: { 
      screen: Home,
      navigationOptions: ({ navigation }) => ({
          title: 'Home',
          //params: navigation.state.params, //Not needed apparently?
          headerLeft: (
            <HamburgerButton navigation={ navigation }/>
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
    },  }, { 
      contentComponent: props => <DrawerHeader {...props} />
  });



const styles = StyleSheet.create ({
    DrawerHeader: {
      flex: 1,
    },
  });
