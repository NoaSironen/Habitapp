import React, {Component} from 'react';
import { StyleSheet, TextInput, Platform, Image, Text, View, Navigator, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import firebase from 'react-native-firebase';
import {StackNavigator} from 'react-navigation';
import AddWorker from './AddWorker';

const rootRef = firebase.database().ref();
const userRef = rootRef.child('users');

export default class RegisterUserPaymentCard extends Component {
      constructor(props) {
      super(props);
      this.unsubscriber = null;
      this.state = {
        isAuthenticated: false,
        user: null,
        typedEmail: this.props.navigation.state.params.typedEmail,
        typedPhoneNumber: this.props.navigation.state.params.typedPhoneNumber,
        typedPassword: this.props.navigation.state.params.typedPassword,
        typedFirstName: this.props.navigation.state.params.typedFirstName,
        typedLastName: this.props.navigation.state.params.typedLastName,
        typedPaymentCardNumber: '',
        users: [],

      };
    }

    onPressAdd = () => {
      const { navigate } = this.props.navigation;
      if (this.state.typedPaymentCardNumber.trim() === ''){
          alert('Vänligen fyll i ditt kortnummer!');
          return;
      }

      firebase.auth().createUserWithEmailAndPassword(this.state.typedEmail, this.state.typedPassword)
      .then((loggedInUser) => {
        this.setState({user: loggedInUser})
        //console.log('Register with user : ${JSON.stringify(loggedInUser.toJSON())}'); // För testning eller vad är dessa consollogs för?
      }).catch = (error) => {
        //console.log('Register failed with error: ${error}');
      };
/*        var user = firebase.auth().currentUser;
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
      })   */
      navigate('CreateNewUid', {
        typedEmail: this.state.typedEmail, 
        typedPassword: this.state.typedPassword, 
        typedPhoneNumber: this.state.typedPhoneNumber,
        typedFirstName: this.state.typedFirstName,
        typedLastName: this.state.typedLastName,
        typedPaymentCardNumber: this.state.typedPaymentCardNumber
        })
    }

  render() {
    return (

      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={styles.headerStyle}>LÄGG TILL BETALNINGSKORT</Text>
          
                   <TextInput style={styles.inputStyle} 
                    placeholder='Kortnummer' 
                    returnKeyType='default'
                    keyboardType='numeric'
                    onChangeText={
                      (text) => {
                        this.setState({ typedPaymentCardNumber: text });
                      }
                    }
                  />
                    <View style={styles.buttonLayout}>
                            <TouchableOpacity style={styles.buttonStyle}
                            onPress={this.onPressAdd}>  
                            <Text style={styles.buttonTextStyle}>KLAR</Text>
                            </TouchableOpacity>
                    </View>
      </KeyboardAvoidingView>
    );
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