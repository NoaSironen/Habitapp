import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import { StackNavigator, NavigationAction } from 'react-navigation';
import firebase from 'react-native-firebase';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Map from './Map';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Map />
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',

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
});