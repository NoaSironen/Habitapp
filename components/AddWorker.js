import React, {Component} from 'react';
import {AppRegistry, View, Text, TextInput, Alert, TouchableOpacity, StyleSheet, KeyboardAvoidingView} from 'react-native';
// import { Button } from 'react-native-elements';

import firebase from 'react-native-firebase';

const rootRef = firebase.database().ref();
const workerRef = rootRef.child('workers');

export default class AddWorker extends Component {
    constructor(props) {
        super(props);
        this.state = ({
          workers: [],
          newFirstName: '',
          loading: false,
        });
      }
    
      componentDidMount() {
        workerRef.on('value', (childSnapshot) => {
          const workers= [];
          childSnapshot.forEach((doc) => {
            workers.push({
              key: doc.key,
              firstName: doc.toJSON().firstName
            });
            this.setState({
              workers: workers.sort((a, b) => {
                return (a.firstName < b.firstName);
              }),
              loading: false,
            });
          });
        });
      }
    
      onPressAdd = () => {
        if (this.state.newFirstName.trim() === '') {
          alert('Tomma fält existerar!');
          return;
        }
        workerRef.push({
          firstName: this.state.newFirstName
        });
      }
    

    render() {
        return(

            
            <View style={styles.container}>
               <Text style={styles.headerStyle}>LÄGG TILL STJÄRNA</Text>

                    <TextInput style={styles.inputStyle} placeholder='Förnamn' returnKeyType='next'
                    onChangeText={
                        (text) => {
                        this.setState({ newFirstName: text});
                        }
                    }
                    value={this.state.newFirstName} 
                    />
                    
                    <TouchableOpacity style={styles.buttonStyle}  
                    onPress={this.onPressAdd}>
                    <Text style={styles.buttonTextStyle}> Skapa Stjärna</Text>
                    </TouchableOpacity>
              
{/*                     <TextInput style={styles.inputStyle} placeholder='Förnamn' returnKeyType='next'/>
                    <TextInput style={styles.inputStyle} placeholder='Efternamn' returnKeyType='next'/>
                    <TextInput style={styles.inputStyle} placeholder='Mobil' returnKeyType='next'/>
                    <TextInput style={styles.inputStyle} placeholder='E-post' returnKeyType='next'/>
                    
                    
                    

                    <TouchableOpacity style={styles.buttonStyle}  
                    onPress={() => {Alert.alert('Du har lagt till en ny arbetare!');}}>
                    <Text style={styles.buttonTextStyle}> Skapa Stjärna</Text>
                    </TouchableOpacity> */}

                    
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


