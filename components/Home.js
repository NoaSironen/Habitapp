import React, {Component} from 'react';
import {AppRegistry, View, Text, TextInput, Alert, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Image} from 'react-native';
// import { Button } from 'react-native-elements';
import ChooseRegistration from './ChooseRegistration';
import {StackNavigator} from 'react-navigation';
import AddWorker from './AddWorker';
import firebase from 'react-native-firebase';

export default class Home extends Component {
    static navigationOptions = {
        title: 'Home',
        headerMode: 'float',
      };

      render() {
        const { navigate } = this.props.navigation;
        return(

            
            <View style={styles.container}>
            <Image style={styles.picture} source={require('../images/HabitApp.png')} />
            </View> 
           
            
            
        )
    }
}
    const styles = StyleSheet.create({

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
    picture: {
        width: 400,
        height:400,
        opacity: 0.1,
    },
    inputStyle: {
        height: 60,
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 25,
        marginBottom: 20,
       // paddingHorizontal: 10,
      //  backgroundColor: '#e5e6e8',

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
    }
}) 
