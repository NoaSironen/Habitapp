import React, { Component } from 'react';
import firebase from 'react-native-firebase';

export default class RetreiveName extends React.Component {
    RetreiveFullName () {
        return
        // Retreives the currently logged in users firstname, lastname and profilepicture
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                var firebaseRef = firebase.database().ref('users').child(user.uid);
                firebaseRef.on('value', userDataSnapshot => {
                    var firstName = userDataSnapshot.child('firstName').val();
                    var lastName = userDataSnapshot.child('lastName').val();
                    var profilePicture = userDataSnapshot.child('profilePicture');
                    var fullName = firstName + ' ' + lastName;
                    console.log(fullName);
                });
            } else {
                console.log("Not signed in")
            }
        })
    }
}
