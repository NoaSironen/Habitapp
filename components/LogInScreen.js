import React, { Component } from 'react';
import { StyleSheet, TextInput, Platform, Image, Text, View, Navigator, TouchableOpacity, KeyboardAvoidingView, StatusBar } from 'react-native';
import firebase from 'react-native-firebase';
import { StackNavigator } from 'react-navigation';
import CustomDrawer from './CustomDrawer';

export default class LogInScreen extends Component {
    constructor(props) {
        super(props);
        this.unsubscriber = null;
        this.state = {
            isAuthenticated: false,
            typedEmail: '',
            typedPassword: '',
            user: null,
        };
    }

    onLogin = () => {
        const { navigate } = this.props.navigation;
        firebase.auth().signInWithEmailAndPassword(this.state.typedEmail, this.state.typedPassword)
            .then((loggedInUser) => {
                this.setState({ user: loggedInUser })
                console.log('Login with user : ${JSON.stringify(loggedInUser.toJSON())}');
                navigate('Home')
            }).catch = (error) => {
                console.log('Login failed with error: ${error}');
            };
/*                   firebase.auth().onAuthStateChanged(function (user) {
                    if (user) {
                        var firebaseRef = firebase.database().ref('users').child(user.uid);
        
                        firebaseRef.on('value', userDataSnapshot => {
                            var firstName = userDataSnapshot.child('firstName').val();
                            var lastName = userDataSnapshot.child('lastName').val();
                            var profilePicture = userDataSnapshot.child('profilePicture');
                            console.log(firstName + ' ' + lastName);
                            console.log(user);
                        });
                    } else {
                        console.log("Not signed in")
                    }
                }); */
    }

    render() {
        const { navigate } = this.props.navigation;
        return (

            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.picture} source={require('../images/HabitApp.png')} />
                </View>
                <TextInput style={styles.inputStyle}
                    placeholder='E-postadress'
                    returnKeyType='next'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    underlineColorAndroid='transparent'
                    autoCorrect={false}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    onChangeText={
                        (text) => {
                            this.setState({ typedEmail: text });
                        }
                    }
                />

                <TextInput style={styles.inputStyle}
                    placeholder='Lösenord'
                    keyboardType='default'
                    underlineColorAndroid='transparent'
                    secureTextEntry={true}
                    ref={(input) => this.passwordInput = input}
                    onChangeText={
                        (text) => {
                            this.setState({ typedPassword: text });
                        }
                    }
                />

                <TouchableOpacity style={styles.buttonStyle}
                    onPress={this.onLogin}>
                    <Text style={styles.buttonTextStyle}>Logga in</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigate('ChooseRegistration')}>
                    <Text style={styles.linkStyle}> Registrera dig </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#133547',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    inputStyle: {
        height: 70,
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 22,
        marginHorizontal: 40,
        marginVertical: 10,
        // borderWidth: 1, 
        padding: 10,
        backgroundColor: '#accee0',
    },
    headerStyle: {
        textAlign: 'center',
        fontSize: 20,
        margin: 20,
    },
    picture: {
        marginTop: 20,
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    linkStyle: {
        textAlign: 'center',
        fontSize: 25,
        margin: 20,
        color: '#accee0',
        textDecorationLine: 'underline',

    },
    buttonStyle: {
        marginHorizontal: 40,
        alignItems: 'center',
        backgroundColor: '#275770',
        padding: 20,
        marginVertical: 10,
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        fontSize: 25,
    }
}) 
