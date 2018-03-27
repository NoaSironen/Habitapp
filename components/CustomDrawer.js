import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import { DrawerNavigator, SafeAreaView, DrawerItems, NavigationActions } from 'react-navigation';
import Home from "./Home";
import AddWorker from './AddWorker';
import ChooseRegistration from './ChooseRegistration';
import LogInScreen from './LogInScreen';
import RegisterUserProfile from './RegisterUserProfile';
import RegisterUserPaymentCard from './RegisterUserPaymentCard';
import firebase from 'react-native-firebase';


/* var rootref = firebase.database().ref('users/profilePicture');
rootref.set('hello')
  .then(function(){
    return rootref.once('value');
  })
  .then(function(snapshot){
    var data = snapshot.val();
    console.log(data);
  }) */

/* rootref.once('value')
  .then(function(snapshot){
    var profilePic = snapshot.child('profilePicture').val();
    console.log(profilePic);
  }) */

class DrawerHeader extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);

/*     firebase.auth().onAuthStateChanged( firebaseUser => {
      if (firebaseUser) {
        console.log(firebaseUser);
      } else {
        console.log('not logged in');
      }
      
    }); */

    var user = firebase.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified;

    if (user != null) {
      name = name.displayName;
      email = user.email;
      photoUrl = user.photoURL;
      emailVerified = user.emailVerified;
      uid = user.uid;
      console.log(email);
    }

  }
  render () {
    return(
      <View style={styles.container}>
              <View style={styles.imageContainer}>
          <Image style={styles.templateImage} source={require('../images/ProfileTemplate.png')}/>
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