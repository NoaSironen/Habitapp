import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import firebase from 'react-native-firebase';

/* firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
      var firebaseRef = firebase.database().ref('users').child(user.uid);

      firebaseRef.on('value', userDataSnapshot => {
          var firstName = userDataSnapshot.child('firstName').val();
          var lastName = userDataSnapshot.child('lastName').val();
          var profilePicture = userDataSnapshot.child('profilePicture');
          var fullName = firstName + ' ' + lastName
          console.log(fullName);
          console.log(user);
      });
  } else {
      console.log("Not signed in")
  }
}); */

const HamburgerButton = (props) => (
  <TouchableOpacity style={styles.HamburgerButton} onPress={() => { props.navigation.navigate('DrawerOpen')}} >
    <Image source={require('../images/HamburgerIcon.png')} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  HamburgerButton: {
    paddingLeft: 10,
  },
});

export default HamburgerButton;