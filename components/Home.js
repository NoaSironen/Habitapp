import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import {StackNavigator, NavigationAction} from 'react-navigation';
import firebase from 'react-native-firebase';
import MapView from 'react-native-maps';



export default class Home extends Component {

      render() {
        return(

           <View style={styles.container}>
            <MapView style={styles.map}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
            </MapView>
            {/* <Image style={styles.picture} source={require('../images/HabitApp.png')} /> */}
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
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
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
