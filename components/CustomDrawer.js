import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Navigator, Platform, FlatList } from 'react-native';
import { DrawerNavigator, SafeAreaView, DrawerItems, NavigationActions } from 'react-navigation';
import Home from "./Home";
import AddWorker from './AddWorker';
import ChooseRegistration from './ChooseRegistration';
import LogInScreen from './LogInScreen';
import RegisterUserPaymentCard from './RegisterUserPaymentCard';
import ChangeUserInfo from './ChangeUserInfo';
import firebase from 'react-native-firebase';

export default class CustomDrawer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fullNameState: '',
      dbprofilePictureState: '',
    };
  }

  // Set's the uidstate with the UID from the logged in user.
  getUid() {
    var user = firebase.auth().currentUser;
    var uid;

    if (user != null) {
      uid = user.uid;
    }
    this.setState({
      uidState: uid
    })
  }

  // Display firstName and lastname of logged in user from Firebase database. 
  componentDidMount() {

    // Retreives first and last name from database and then concatenates it to one variable for printing in drawer
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var that = this;
        let firebaseRef = firebase.database().ref('users').child(user.uid);

        firebaseRef.once('value', snapshot => {
          let dbFirstName = snapshot.child('firstName').val();
          let dbLastName = snapshot.child('lastName').val();
          that.setState({
            fullNameState: dbFirstName + ' ' + dbLastName
          })
        })
      }
    })
  }

  // Makes logged in user sign out from app and Firebase Authentification.
  navigateToScreenLogOut = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    firebase.auth().signOut().then(function () {
      console.log('Signed Out!')
    }).catch(function (error) {
      console.log('Not Signed Out')
    });
    this.props.navigation.dispatch(navigateAction);
  }

  // Navigates to the screen that's clicked on in the drawer menu. 
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={this.navigateToScreen('ChangeUserInfo')} >
            <Image style={styles.templateImage} source={require('../images/ProfileTemplate.png')} />
          </TouchableOpacity>
          <Text style={styles.nameText}>{this.state.fullNameState}</Text>
        </View>
        <ScrollView>
          <View>
            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Home')}>
              Home
              </Text>
            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('AddWorker')}>
              Add Worker
              </Text>
            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('ChooseRegistration')}>
              Choose Registration
              </Text>
            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('LogInScreen')}>
              Login
              </Text>
            <Text style={styles.navItemStyle} onPress={this.navigateToScreenLogOut('LogOutScreen')}>
              Log out
              </Text>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>© Habitapp 2018</Text>
        </View>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    flex: 1
  },
  navItemStyle: {
    padding: 10
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  footerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white'
  },
  templateImage: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  nameText: {
    marginTop: 10,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    paddingVertical: 10,
  }
});

