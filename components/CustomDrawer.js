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

var database = firebase.database();

export default class CustomDrawer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userInfoState: [],
    }
  }

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

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  componentDidMount() {

    //RetreiveFullName = () => {
    // Retreives the currently logged in users firstname, lastname and profilepicture
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        var firebaseRef = firebase.database().ref('users').child(user.uid);
        var userInfoArray = [];
        firebaseRef.on('value', userDataSnapshot => {
          var firstName = userDataSnapshot.child('firstName').val();
          var lastName = userDataSnapshot.child('lastName').val();
          var profilePicture = userDataSnapshot.child('profilePicture');
          var fullName = firstName + ' ' + lastName;

          var userInfo = userDataSnapshot.val();
          userInfo['key'] = userDataSnapshot.key;
          console.log(userInfo);
          userInfoArray.push(userInfo);

          this.setState({
            userInfoState: userInfoArray
          });
        });
      } else {
        console.log("Not signed in")
      }
    });
    //}
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={this.navigateToScreen('ChangeUserInfo')} >
            <Image style={styles.templateImage} source={require('../images/ProfileTemplate.png')} />
          </TouchableOpacity>

          {this.state.userInfoState.map(function (userName) {
            return (
              <Text>
                {userName.firstName}
                {userName.LastName}
              </Text>
            )
          })}

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
          <Text>Footer</Text>
        </View>
      </View>
    )
  };
}

/* DrawerHeader.propTypes = {
  navigation: PropTypes.object
}; */

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
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
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white'
  },
  templateImage: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  }
});