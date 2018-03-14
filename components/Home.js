import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import {StackNavigator, NavigationAction} from 'react-navigation';
import firebase from 'react-native-firebase';

export default class Home extends Component {

      render() {
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

    },
    headerStyle: {
        textAlign: 'center',
        fontSize: 20,
        margin: 20,
    },
}) 
