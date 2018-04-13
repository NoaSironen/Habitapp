import React, {Component} from 'react';
import { StyleSheet, TextInput, Platform, Image, Text, View, Navigator, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import firebase from 'react-native-firebase';
import {StackNavigator} from 'react-navigation';
import AddWorker from './AddWorker';

const rootRef = firebase.database().ref();
const userRef = rootRef.child('users');

export default class CreateNewUid extends Component {
    constructor(props) {
        super(props);
        this.unsubscriber = null;
        this.state = {
          typedEmail: this.props.navigation.state.params.typedEmail,
          typedPhoneNumber: this.props.navigation.state.params.typedPhoneNumber,
          typedPassword: this.props.navigation.state.params.typedPassword,
          typedFirstName: this.props.navigation.state.params.typedFirstName,
          typedLastName: this.props.navigation.state.params.typedLastName,
          typedPaymentCardNumber: this.props.navigation.state.params.typedPaymentCardNumber,
          defaultProfilePicture: '../images/ProfileTemplate.png',
        };
      }
      onPressAdd = () =>  {
        const { navigate } = this.props.navigation;
        var user = firebase.auth().currentUser;
        var uid;
  
        if (user != null) {
          uid = user.uid;
        } 
        userRef.child(uid).set({
          email: this.state.typedEmail,
          firstName: this.state.typedFirstName,
          lastName: this.state.typedLastName,
          phoneNumber: this.state.typedPhoneNumber,
          paymentCardNumber: this.state.typedPaymentCardNumber,
          profilePicture: this.state.defaultProfilePicture
        })
        navigate('Home'); 
      } 
      render () {
        return(

            <View>
                            <TouchableOpacity style={styles.buttonStyle}
                            onPress={this.onPressAdd}>  
                            <Text style={styles.buttonTextStyle}>KLAR</Text>
                            </TouchableOpacity>
              </View>

        )
      }
    }
    const styles = StyleSheet.create({

        container: {
          flex: 1,
         // backgroundColor: '#133547',
        },
      
        inputStyle: {
            height: 70,
            fontSize: 22,
            marginHorizontal: 20,
            marginVertical: 3,
        },
        headerStyle: {
            textAlign: 'center',
            fontSize: 20,
            margin: 10,
        },
        buttonStyle: {
            marginHorizontal: 20,
            alignItems: 'center',
            backgroundColor: '#161616',
            marginVertical: 20,
            borderRadius: 2,
        },
        buttonTextStyle: {
            marginVertical: 20,
            textAlign: 'center',
            color: '#FFFFFF',
            fontSize: 22,
        },
        buttonLayout: {
          //alignItems: 'flex-end',
        }
      }) 