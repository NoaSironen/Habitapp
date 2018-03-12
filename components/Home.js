import React, {Component} from 'react';
import {AppRegistry, View, Text, TextInput, Alert, TouchableOpacity, StyleSheet, KeyboardAvoidingView} from 'react-native';
// import { Button } from 'react-native-elements';
import ChooseRegistration from './ChooseRegistration';
import {StackNavigator} from 'react-navigation';
import AddWorker from './AddWorker';
import firebase from 'react-native-firebase';

export default class Home extends Component {
/*     static navigationOptions = {
        title: 'Home',
      }; */

      render() {
        const { navigate } = this.props.navigation;
        return(

            
            <View style={styles.container}>
                    <Text style={styles.headerStyle} onPress= { ()=> navigate('AddWorker')}> Lägg till stjärna</Text>
                    <Text style={styles.headerStyle} onPress= { ()=> navigate('ChooseRegistration')}> Registrera dig</Text>
            </View> 
           
            
            
        )
    }
}
    const styles = StyleSheet.create({

    container: {
    
        margin: 20,
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
