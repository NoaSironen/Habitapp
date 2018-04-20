import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Navigator } from 'react-native';
import { DrawerNavigator, SafeAreaView, DrawerItems, NavigationActions } from 'react-navigation';
import Home from "./Home";
import AddWorker from './AddWorker';
import ChooseRegistration from './ChooseRegistration';
import LogInScreen from './LogInScreen';
import RegisterUserPaymentCard from './RegisterUserPaymentCard';
import ChangeUserInfo from './ChangeUserInfo';
import firebase from 'react-native-firebase';

var database = firebase.database();

export default class DrawerHeader extends Component {

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

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={this.navigateToScreen('ChangeUserInfo')} >
            <Image style={styles.templateImage} source={require('../images/ProfileTemplate.png')} />
          </TouchableOpacity>
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
          <Text>{this.props.fullName}</Text>
        </View>
      </View>
    )
  }
}

DrawerHeader.propTypes = {
  navigation: PropTypes.object
};

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