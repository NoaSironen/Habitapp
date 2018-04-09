import React, {Component} from 'react';
import { StyleSheet, TextInput, Platform, Image, Text, View, Navigator, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {StackNavigator, NavigationAction} from 'react-navigation';
import firebase from 'react-native-firebase';



export default class ChangeUserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isAuthenticated: false,
          typedFirstName: '',
          user: null,
        };
      } 


    render() {
      return(


        <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <Text style={styles.headerStyle}>DINA UPPGIFTER</Text>
          
                   <TextInput style={styles.inputStyle} 
                    placeholder='Förnamn' 
                    returnKeyType='next'
                    keyboardType='default'
                    onChangeText={
                      (text) => {
                        this.setState({ typedFirstName: text });
                      }
                    }
                  />
                    
                    <TouchableOpacity style={styles.buttonStyle}  
                            onPress={this.onPressAdd}>
                            <Text style={styles.buttonTextStyle}> SPARA </Text>
                    </TouchableOpacity>
                    
         </KeyboardAvoidingView>
      )
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