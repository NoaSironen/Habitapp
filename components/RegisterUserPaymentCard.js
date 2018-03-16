import React, {Component} from 'react';
import { StyleSheet, TextInput, Platform, Image, Text, View, Navigator, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import firebase from 'react-native-firebase';
import {StackNavigator} from 'react-navigation';
import AddWorker from './AddWorker';


export default class RegisterUserPaymentCard extends Component {
      constructor(props) {
      super(props);
      this.unsubscriber = null;
      this.state = {
        typedEmail: this.props.navigation.state.params.typedEmail,
        typedPhoneNumber: this.props.navigation.state.params.typedPhoneNumber,
        typedPassword: this.props.navigation.state.params.typedPassword,
        typedFirstName: this.props.navigation.state.params.typedFirstName,
        typedLastName: this.props.navigation.state.params.typedLastName,
        typedCardNumber: '',
      };
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
                        this.setState({ typedCardNumber: text });
                      }
                    }
                  />
                   <Text>Email: {this.state.typedEmail}</Text> 
                   <Text>Mobil: {this.state.typedPhoneNumber}</Text> 
                   <Text>Lösen: {this.state.typedPassword}</Text> 
                   <Text>Förnamn: {this.state.typedFirstName}</Text>
                   <Text>Efternamn: {this.state.typedLastName}</Text>

                    <View style={styles.buttonLayout}>
                            <TouchableOpacity style={styles.buttonStyle}
                            onPress={this.onRegister}>  
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
/*   halfView: {
    flexDirection: 'row',
    marginHorizontal: 20,
    borderWidth: 1,
  }, */
  inputStyle: {
      height: 70,
      fontSize: 22,
      marginHorizontal: 20,
      marginVertical: 3,
     // marginRight: 50,      
      
     // paddingHorizontal: 10,
    //  backgroundColor: '#e5e6e8',
  },
/*   nameInputStyle: {
    height: 70,
    width: 185,
    fontSize: 22,  
}, */
  headerStyle: {
      textAlign: 'center',
      fontSize: 20,
      margin: 10,
  },
  buttonStyle: {
      marginHorizontal: 20,
      alignItems: 'center',
      backgroundColor: '#161616',
      height: 75,
      width: 150,
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
    alignItems: 'flex-end',
  }
}) 