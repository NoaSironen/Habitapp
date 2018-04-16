import React, {Component} from 'react';
import { StyleSheet, TextInput, Platform, Image, Text, View, Navigator, TouchableOpacity, FlatList, KeyboardAvoidingView} from 'react-native';
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
        
        <View style={styles.logoContainer}>
        <Image style={styles.picture} source={require('../images/ProfileTemplate.png')} />
        </View>
                <View style={styles.linkLayout}> 
                    <TouchableOpacity style={styles.linkStyle}>
                        <Text style={styles.linkText}> BYT BANKKORT |</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.linkStyle}>
                        <Text style={styles.linkText}>| BYT LÖSENORD </Text>
                    </TouchableOpacity> 
                </View> 
                {/* <Text style={styles.headerStyle}>DINA UPPGIFTER</Text> */}
                
                <TextInput style={styles.inputStyle} 
                    placeholder='E-postadress' 
                    returnKeyType='next'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    onChangeText={
                      (text) => {
                        this.setState({ typedEmail: text });
                      }
                    }
                  />
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
                  
                   <TextInput style={styles.inputStyle} 
                    placeholder='Efternamn' 
                    returnKeyType='next'
                    keyboardType='default'
                    onChangeText={
                      (text) => {
                        this.setState({ typedLastName: text });
                      }
                    }
                  />
            
                    <TextInput style={styles.inputStyle} 
                    placeholder='Mobilnummer' 
                    keyboardType='phone-pad'
                    returnKeyType='next'
                    onChangeText={
                      (text) => {
                        this.setState({ typedPhoneNumber: text });
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
        height:100,
        borderRadius:100,
    }
  }) 