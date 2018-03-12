import React from 'react';
import {AppRegistry, View, Text, TextInput, Alert, TouchableOpacity, StyleSheet, KeyboardAvoidingView} from 'react-native';
// Denna funktionalitet ska ligga på en knapp senare när arbetaren klickar i "jobb klart!"
import firebase from 'react-native-firebase';

const rootRef = firebase.database().ref();
const performedJobsRef = rootRef.child('performedJobs');

export default class AddPerformedJobs extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            performedJobs: [],
            description: '',
            workerFirstName: '',
            workerLastName: '',
            customerFirstName: '',
            customerLastName: '',
            loading: false,
        });
    }

    componentDidMount() {
        performedJobsRef.on('value', (childSnapshot) => {
            const performedJobs = [];
            childSnapshot.forEach((doc) => {
                performedJobs.push({
                    key: doc.key,
                    description: doc.toJSON().description,
                    workerFirstName: doc.toJSON().workerFirstName,
                    workerLastName: doc.toJSON().workerLastName,
                    customerFirstName: doc.toJSON().customerFirstName,
                    customerLastName: doc.toJSON().customerLastName,
                });
            })

        })
    }
    onPressAdd = () => { //Validation so that no fields are empty.
        if (this.state.description.trim() === '') {
            alert ('Vänligen fyll i beskrivning')
            return;
        }
        if (this.state.workerFirstName.trim() === '') {
            alert ('Vänligen fyll i arbetarens namn')
            return;
        }
        if (this.state.workerLastName.trim() === '') {
            alert ('Vänligen fyll i arbetarens efternamn')
            return;
        }
        if (this.state.customerFirstName.trim () === '') {
            alert ('Vänligen fyll i kundens namn')
            return;
        }
        if (this.state.customerLastName.trim() === '') {
            alert ('Vänligen fyll i kundens efternamn')
        }
        performedJobsRef.push({
            description: this.state.description,
            workerFirstName: this.state.workerFirstName,
            workerLastName: this.state.workerLastName,
            customerFirstName: this.state.customerFirstName,
            customerLastName: this.state.customerLastName,
        });
        alert ('Ny beskrivning tillagd!')
        }
    }