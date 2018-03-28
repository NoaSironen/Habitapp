import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Navigator } from 'react-native';
import { DrawerNavigator, SafeAreaView, DrawerItems, NavigationActions } from 'react-navigation';
import Home from "./Home";
import AddWorker from './AddWorker';
import ChooseRegistration from './ChooseRegistration';
import LogInScreen from './LogInScreen';
import RegisterUserPaymentCard from './RegisterUserPaymentCard';
<<<<<<< HEAD
import firebase from 'react-native-firebase';
=======
import UserDetails from './UserDetails';
>>>>>>> 9dab054b2fba89cd7f35e0c6c6df0ca21ed16c31

class DrawerHeader extends Component {
/*   constructor(props) {
    super(props);
    this.state={
      profilePicture: this.props.navigation.state.params.profilePicture,
    }
  } */
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);

    var firebaseRef = firebase.database().ref().child('users');

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        firebaseRef.on('child_added', userDataSnapshot => {
          var firstName = userDataSnapshot.child('firstName').val();
          var lastName = userDataSnapshot.child('lastName').val();
          console.log(firstName + ' ' + lastName);
        })
      } else {
        console.log("Not signed in")
      }
    });

  }
  render () {
    return(
      <View style={styles.container}>
              <View style={styles.imageContainer}>
              <TouchableOpacity onPress={this.navigateToScreen('UserDetails')}>
          {/* <Image style={styles.templateImage} source={require(profilePicture)}/> */}
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
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>This is my fixed footer</Text>
        </View>
      </View>
    )
  }
}

DrawerHeader.propTypes = {
  navigation: PropTypes.object
};

const styles = StyleSheet.create ({
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
    padding: 20,
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

export default DrawerHeader;