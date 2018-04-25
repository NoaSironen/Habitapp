import React, {Component} from 'react';
import { StyleSheet, TextInput, Platform, Image, Text, View, Navigator, Alert, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import firebase from 'react-native-firebase';
import {StackNavigator} from 'react-navigation';

 const rootRef = firebase.database().ref();
const userRef = rootRef.child('users'); 


export default class ChangeUserPassword extends Component {
      constructor(props) {
      super(props);
      this.state = {
        newPassword: '',
        repetedNewPassword: '',
      };
    } 
changePassword = () => {
  const { navigate } = this.props.navigation;
  
  var user = firebase.auth().currentUser;
  var newPassword = this.state.newPassword;
  if(newPassword.length < 6){
    Alert.alert('Lösenordet måste vara minst 6 tecken')
  }
  else
  if(this.state.newPassword === this.state.repetedNewPassword) {
    user.updatePassword(newPassword).then(function() {
      Alert.alert('Ditt lösenord är nu ändrat!')
        navigate('Home')
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

  
  }else{
    Alert.alert('Dina inmatade lösenord överensstämmer inte med varandra.')
  }
}

  render() {
    const { navigate } = this.props.navigation;
    return (

      <KeyboardAvoidingView behavior='padding' style={styles.container}>
      {/*   <Text style={styles.headerStyle}></Text> */}

                  <TextInput style={styles.inputStyle} 
                    placeholder='Nytt lösenord'
                    //value=''
                    keyboardType='default'
                    secureTextEntry={true}
                    onChangeText={
                      (text) => {
                        this.setState({ newPassword: text });
                      }
                    } 
                  /> 

                <TextInput style={styles.inputStyle} 

                    placeholder='Repetera nya lösenordet' 
                    keyboardType='default'
                    secureTextEntry={true}
                    onChangeText={
                      (text) => {
                        this.setState({ repetedNewPassword: text });
                      }
                    } 
                /> 

                    <View style={styles.buttonLayout}>
                            <TouchableOpacity 
                            style={styles.buttonStyle} 
                             onPress={this.changePassword}>
                            <Text style={styles.buttonTextStyle}>SPARA</Text>
                            </TouchableOpacity>
                    </View>

      </KeyboardAvoidingView>
    );
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
        marginBottom: 30,
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
        height:100,
        borderRadius:100,
    }
  }) 