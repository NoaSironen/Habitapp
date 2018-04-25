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
        oldPassword: '',
        newPassword: '',
        repetedNewPassword: '',
      };
    } 
componentDidMount() {
    
}

  render() {
    const { navigate } = this.props.navigation;
    return (

      <KeyboardAvoidingView behavior='padding' style={styles.container}>
      {/*   <Text style={styles.headerStyle}></Text> */}

                  <TextInput style={styles.inputStyle} 
                    placeholder='Nytt lösenord'
                    value=''
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
                             onPress={() => navigate('Home')}>
                              {/* onPress={this.onRegister}>   */}
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