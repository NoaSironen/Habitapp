import React from 'react';
import { StyleSheet, TextInput, Platform, Image, Text, View, Navigator, TouchableOpacity } from 'react-native';
//import AddWorker from './components/AddWorker'

import firebase from 'react-native-firebase';

const rootRef = firebase.database().ref();
const animalRef = rootRef.child('animals');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      animals: [],
      newAnimalName: '',
      loading: false,
    });
  }

  componentDidMount() {
    animalRef.on('value', (childSnapshot) => {
      const animals= [];
      childSnapshot.forEach((doc) => {
        animals.push({
          key: doc.key,
          animalName: doc.toJSON().animalName
        });
        this.setState({
          animals: animals.sort((a, b) => {
            return (a.animalName < b.animalName);
          }),
          loading: false,
        });
      });
    });
  }

  onPressAdd = () => {
    if (this.state.newAnimalName.trim() === '') {
      alert('Tomma fält existerar!');
      return;
    }
    animalRef.push({
      animalName: this.state.newAnimalName
    });
  }

  render() {
    return (

      <View>
         <TextInput style={styles.inputStyle} placeholder='Förnamn' returnKeyType='next'
          onChangeText={
            (text) => {
              this.setState({ newAnimalName: text});
            }
          }
          value={this.state.newAnimalName} 
          />
                    
                    <TouchableOpacity style={styles.buttonStyle}  
                    onPress={this.onPressAdd}>
                    <Text style={styles.buttonTextStyle}> Skapa Stjärna</Text>
                    </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    height: 60,
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 20,
   // paddingHorizontal: 10,
  //  backgroundColor: '#e5e6e8',

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



{/*         <Image source={require('./assets/RNFirebase512x512.png')} style={[styles.logo]} />
        <Text style={styles.welcome}>
          Welcome to the React Native{'\n'}Firebase starter project!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        {Platform.OS === 'ios' ? (
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
        ) : (
          <Text style={styles.instructions}>
            Double tap R on your keyboard to reload,{'\n'}
            Cmd+M or shake for dev menu
          </Text>
        )}
        <View style={styles.modules}>
          <Text style={styles.modulesHeader}>The following Firebase modules are enabled:</Text>
          {firebase.admob.nativeModuleExists && <Text style={styles.module}>Admob</Text>}
          {firebase.analytics.nativeModuleExists && <Text style={styles.module}>Analytics</Text>}
          {firebase.auth.nativeModuleExists && <Text style={styles.module}>Authentication</Text>}
          {firebase.fabric.crashlytics.nativeModuleExists && <Text style={styles.module}>Crashlytics</Text>}
          {firebase.crash.nativeModuleExists && <Text style={styles.module}>Crash Reporting</Text>}
          {firebase.firestore.nativeModuleExists && <Text style={styles.module}>Cloud Firestore</Text>}
          {firebase.messaging.nativeModuleExists && <Text style={styles.module}>Messaging</Text>}
          {firebase.perf.nativeModuleExists && <Text style={styles.module}>Performance Monitoring</Text>}
          {firebase.database.nativeModuleExists && <Text style={styles.module}>Realtime Database</Text>}
          {firebase.config.nativeModuleExists && <Text style={styles.module}>Remote Config</Text>}
          {firebase.storage.nativeModuleExists && <Text style={styles.module}>Storage</Text>}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo: {
    height: 80,
    marginBottom: 16,
    width: 80,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  modules: {
    margin: 20,
  },
  modulesHeader: {
    fontSize: 16,
    marginBottom: 8,
  },
  module: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  }
}); */}
