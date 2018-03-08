import React, {Component} from 'react';
import {AppRegistry, View, Text, TextInput, Alert, TouchableOpacity, StyleSheet, KeyboardAvoidingView} from 'react-native';
// import { Button } from 'react-native-elements';
//var Firebase = require('firebase');

export default class AddWorker extends Component {
/*     constructor(props) {
        super(props);
        var myFirebaseRef = new Firebase('https://habitapp-88060.firebaseio.com');
        myFirebaseRef.set({
            Title: 'Sebastian',
            Author: 'Altikardes'
        });
    } */

    render() {
        return(

            
            <View style={styles.container}>
               <Text style={styles.headerStyle}>LÄGG TILL STJÄRNA</Text>
              
                    <TextInput style={styles.inputStyle} placeholder='Förnamn' returnKeyType='next'/>
                    <TextInput style={styles.inputStyle} placeholder='Efternamn' returnKeyType='next'/>
                    <TextInput style={styles.inputStyle} placeholder='Mobil' returnKeyType='next'/>
                    <TextInput style={styles.inputStyle} placeholder='E-post' returnKeyType='next'/>
                    
                    
                    

                    <TouchableOpacity style={styles.buttonStyle}  
                    onPress={() => {Alert.alert('Du har lagt till en ny arbetare!');}}>
                    <Text style={styles.buttonTextStyle}> Skapa Stjärna</Text>
                    </TouchableOpacity>

                    
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
AppRegistry.registerComponent('AddWorker', () => AddWorker ); // This line should maybe be removed because of the import in index.js


