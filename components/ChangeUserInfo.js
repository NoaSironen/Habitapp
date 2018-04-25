import React, {Component} from 'react';
import { StyleSheet, TextInput, Platform, Image, Text, View, Navigator, TouchableOpacity, Alert, FlatList, KeyboardAvoidingView} from 'react-native';
import {StackNavigator, NavigationAction} from 'react-navigation';
import firebase from 'react-native-firebase';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const rootRef = firebase.database().ref();
const userRef = rootRef.child('users');

export default class ChangeUserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
          /* userInfo : [], */
          emailState : '',
          firstNameState: '',
          lastNameState: '',
          phoneNumberState: '',
          paymentCardNumberState: '',
          profilePictureState: ''
        };
      } 

componentWillMount(){
  var user = firebase.auth().currentUser;
  var uid;
  var dbEmail;

  if (user != null) {
    uid = user.uid;
    dbEmail = user.email;
  } 

  var that = this;
  let firebaseRef = firebase.database().ref().child('users/' + uid);
  
 /*  var finished = []; */

  firebaseRef.once('value', snapshot => {
/*     let result = snapshot.val(); */
    let dbFirstName = snapshot.child('firstName').val();
    let dbLastName = snapshot.child('lastName').val();
    let dbPhoneNumber = snapshot.child('phoneNumber').val();
    let dbPaymentCardNumber = snapshot.child('paymentCardNumber').val();
    let dbProfilePicture = snapshot.child('profilePicture').val();
/*     result['key'] = snapshot.key; */
    that.setState({
      emailState: dbEmail,
      firstNameState: dbFirstName,
      lastNameState: dbLastName,
      phoneNumberState: dbPhoneNumber, 
      paymentCardNumberState: dbPaymentCardNumber,
      profilePictureState: dbProfilePicture,
    })

  })
}
updateUserContent = () => {
  const { navigate } = this.props.navigation;

  var user = firebase.auth().currentUser;
  var uid;
  

  if (user != null) {
    uid = user.uid;

  } 
   userRef.child(uid).set({
    firstName: this.state.firstNameState,
    lastName: this.state.lastNameState,
    phoneNumber: this.state.phoneNumberState,
    paymentCardNumber: this.state.paymentCardNumberState,
    profilePicture: this.state.profilePictureState
  })
  Alert.alert('Du har nu uppdaterat dina uppgifter!'); 
  navigate('Home');
  user.updateEmail(this.state.emailState).then(function() {
    
  }).catch(function(error) {
  Alert.alert(
    'Du måste logga in på nytt för att byta lösenord.',
    'Vill du göra det?',
    [
      {text: 'Ja', onPress: () => navigate('LogInScreen')},
      {text: 'Nej', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    ],
    { cancelable: true }
  )
});
}  

    render() {
      const { navigate } = this.props.navigation;
      return(

        <KeyboardAvoidingView behavior='padding' style={styles.container}>

            
              <View style={styles.logoContainer}>
              <Image style={styles.picture} source={require('../images/ProfileTemplate.png')} />
                {/* <Image style={styles.picture}  source={{uri: '.' + loggedInUser.profilePicture}}  /> */}
              </View>
            

          
                <View style={styles.linkLayout}> 
                    <TouchableOpacity style={styles.linkStyle}>
                        <Text style={styles.linkText}> BYT BANKKORT |</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.linkStyle} onPress={() => navigate('ChangeUserPassword')}>
                        <Text style={styles.linkText}>| BYT LÖSENORD </Text>
                    </TouchableOpacity> 
                </View> 

{/*                 { this.state.userInfo.map(function(loggedInUser){
                   return( */}
                    <TextInput style={styles.inputStyle} 
                   /*  key={loggedInUser.key} */
                    value={this.state.emailState}
                    returnKeyType='next'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    onChangeText={
                      (text) => {
                        this.setState({ emailState: text });
                      }
                    }
                  />
{/*                   )
                })}  */}
              
                   <TextInput style={styles.inputStyle} 
                   value={this.state.firstNameState}
                    returnKeyType='next'
                    keyboardType='default'
                    onChangeText={
                      (text) => {
                        this.setState({ firstNameState : text });
                      }
                    }
                  />

                   <TextInput style={styles.inputStyle} 
                   value={this.state.lastNameState}
                    returnKeyType='next'
                    keyboardType='default'
                    onChangeText={
                      (text) => {
                        this.setState({ lastNameState: text });
                      }
                    }
                  />

                    <TextInput style={styles.inputStyle} 
                    value={this.state.phoneNumberState} 
                    keyboardType='phone-pad'
                    returnKeyType='next'
                    onChangeText={
                      (text) => {
                        this.setState({ phoneNumberState: text });
                      }
                    }
                  />

                    <TouchableOpacity style={styles.buttonStyle}  
                        onPress={this.updateUserContent}>
                        <Text style={styles.buttonTextStyle}> SPARA </Text>
                    </TouchableOpacity>

      </KeyboardAvoidingView>
    )
  }

}

  
const styles = StyleSheet.create({

  container: {
    flex: 1,
    margin: 20,
    // backgroundColor: '#133547',
  },
  inputStyle: {
    height: 70,
    fontSize: 22,
    marginVertical: 3,
    alignItems: 'center',
    textAlign: 'center',
  },
  headerStyle: {
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#161616',
    padding: 20,
  },
  linkText: {
    fontSize: 20,

  },
  linkStyle: {
    marginVertical: 20,
  },
  linkLayout: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    fontSize: 22,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  picture: {
    width: 100,
    height: 100,
    borderRadius: 100,
  }
});