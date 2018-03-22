<<<<<<< HEAD
import React from 'react';
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
=======
import React, {Component} from 'react';
import { TouchableOpacity, View, Image, StyleSheet, Text } from 'react-native';
import { DrawerNavigator, StackNavigator, SafeAreaView, DrawerItems, ScrollView  } from 'react-navigation'; // Remove SafeaAweaView & DrawerItems if CustomDrawerHeader is moved to seperate file!
>>>>>>> 62434bc8490d3e93b111cdc217947e73b6944545
import Home from "./Home";
import AddWorker from './AddWorker';
import ChooseRegistration from './ChooseRegistration';
import LogInScreen from './LogInScreen';
import RegisterUserProfile from './RegisterUserProfile';
import RegisterUserPaymentCard from './RegisterUserPaymentCard';
import DrawerHeader from './DrawerHeader';

 const StackNav = StackNavigator ({
    Home: { 
      screen: Home,
      navigationOptions: ({ navigation }) => ({
          title: 'Home',
          //params: navigation.state.params, //Not needed apparently?
          headerLeft: (
<<<<<<< HEAD
            <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')} style={styles.HamburgerButton}>
              <Image source={require('../images/HamburgerIcon.png')}/>
=======
            <TouchableOpacity 
            style={styles.HamburgerButton} 
            onPress={() => navigation.navigate('DrawerOpen')}>
            <Image source={require('../images/HamburgerIcon.png')}/>
>>>>>>> 62434bc8490d3e93b111cdc217947e73b6944545
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

<<<<<<< HEAD
  const styles = StyleSheet.create ({
    HamburgerButton: {
      paddingLeft: 10,
    }
  })
=======


const styles = StyleSheet.create ({
    HamburgerButton: {
      paddingLeft: 10,
    },
    DrawerHeader: {
      flex: 1,
      
    },
  });
>>>>>>> 62434bc8490d3e93b111cdc217947e73b6944545
