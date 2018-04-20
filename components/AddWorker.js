<<<<<<< HEAD
import React, { Component } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';

=======
import React, {Component} from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, Dimensions, StyleSheet, KeyboardAvoidingView} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {StackNavigator, NavigationAction} from 'react-navigation';
>>>>>>> f42370090abdebd6e0d888d9fdfbc329d3df6b94
import firebase from 'react-native-firebase';

const rootRef = firebase.database().ref();
const workerRef = rootRef.child('workers');

export default class AddWorker extends Component {

    constructor(props) {
        super(props);
        this.state = ({
<<<<<<< HEAD
            workers: [],
            newFirstName: '',
            newLastName: '',
            newPhoneNumber: '',
            newEmail: '',
            loading: false,
        });
    }

    componentDidMount() {
        workerRef.on('value', (childSnapshot) => {
            const workers = [];
            childSnapshot.forEach((doc) => {
                workers.push({
                    key: doc.key,
                    firstName: doc.toJSON().firstName,
                    lastName: doc.toJSON().lastName,
                    phoneNumber: doc.toJSON().phoneNumber,
                    email: doc.toJSON().newEmail
                });
                this.setState({
                    workers: workers.sort((a, b) => {
                        return (a.firstName < b.firstName);
                    }),
                    loading: false,
                });
            });
        });
    }

    onPressAdd = () => {
        const { navigate } = this.props.navigation;
        if (this.state.newFirstName.trim() === '') {
=======
          defaultProfilePicture: '../images/ProfileTemplate.png',
          loading: false,
        });
      }
  
      onPressAdd = () => {
        const { navigate } = this.props.navigation;
        var user = firebase.auth().currentUser;
        var uid;
  
        if (user != null) {
          uid = user.uid;
        } 
        if (this.state.newFirstName.trim() === ''){
>>>>>>> f42370090abdebd6e0d888d9fdfbc329d3df6b94
            alert('Vänligen fyll i ditt förnamn!');
            return;
        }
        if (this.state.newLastName.trim() === '') {
            alert('Vänligen fyll i ditt efternamn!');
            return;
        }
        if (this.state.newPhoneNumber.trim() === '') {
            alert('Vänligen fyll i ditt telefonnummer!');
            return;
        }
        if (this.state.newEmail.trim() === '') {
            alert('Vänligen fyll i din e-post!');

            return;
        }
<<<<<<< HEAD
        workerRef.push({
            firstName: this.state.newFirstName,
            lastName: this.state.newLastName,
            phoneNumber: this.state.newPhoneNumber,
            email: this.state.newEmail
=======
        workerRef.child(uid).set({
          firstName: this.state.newFirstName,
          lastName: this.state.newLastName,
          phoneNumber: this.state.newPhoneNumber,
          email: this.state.newEmail,
          profilePicture: this.state.defaultProfilePicture,
>>>>>>> f42370090abdebd6e0d888d9fdfbc329d3df6b94
        });

        alert('Du har lagt till en ny stjärna!');
        navigate('Home');
<<<<<<< HEAD
    }
=======
      }
>>>>>>> f42370090abdebd6e0d888d9fdfbc329d3df6b94

    render() {

        return (

            <View style={styles.container}>
                <Text style={styles.headerStyle}>LÄGG TILL STJÄRNA</Text>

                <TextInput style={styles.inputStyle}
                    placeholder='Förnamn'
                    returnKeyType='next'
                    onChangeText={
                        (text) => {
                            this.setState({ newFirstName: text });
                        }
                    }
                    value={this.state.newFirstName}
                />

                <TextInput style={styles.inputStyle}
                    placeholder='Efternamn'
                    returnKeyType='next'
                    onChangeText={
                        (text) => {
                            this.setState({ newLastName: text });
                        }
                    }
                    value={this.state.newLastName}
                />

                <TextInput style={styles.inputStyle}
                    placeholder='Mobilnummer'
                    returnKeyType='next'
                    onChangeText={
                        (text) => {
                            this.setState({ newPhoneNumber: text });
                        }
                    }
                    value={this.state.newPhoneNumber}
                />

                <TextInput style={styles.inputStyle}
                    placeholder='E-post'
                    returnKeyType='next'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    onChangeText={
                        (text) => {
                            this.setState({ newEmail: text });
                        }
                    }
                    value={this.state.newEmail}
                />

                <TouchableOpacity style={styles.buttonStyle}
                    onPress={this.onPressAdd}>
                    <Text style={styles.buttonTextStyle}> Skapa Stjärna</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {

        margin: 20,
    },
    inputStyle: {
        height: 60,
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 25,
        marginBottom: 20,
    },
    headerStyle: {
        textAlign: 'center',
        fontSize: 20,
        margin: 20,
    },
    buttonStyle: {

        alignItems: 'center',
        backgroundColor: '#275770',
        padding: 20,
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        fontSize: 25,
    },
});