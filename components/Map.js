import React, {Component} from 'react';
import {View, Image, Text, TextInput, StyleSheet, Dimensions, Alert, Modal, TouchableOpacity} from 'react-native';
import {StackNavigator, NavigationAction} from 'react-navigation';
import firebase from 'react-native-firebase';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import HamburgerButton from './HamburgerButton';

const rootRef = firebase.database().ref();
const workerRef = rootRef.child('positions');

const {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATID = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA = ASPECT_RATID


export default class Map extends Component {
constructor(props) {
  super(props)

  this.state = {
    initialPosition: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0,
      longitudeDelta: 0
    },
    markerPosition : {
      latitude: 0,
      longitude: 0
    },
    modalVisible: false,
    workerMarker : []
    
  }
}

/*     mapStyle = */

    watchID: ?number = null // It is correct and it compiles, just a VS Code bug. 

componentDidMount(){
  navigator.geolocation.getCurrentPosition((position) => {
    var lat = parseFloat(position.coords.latitude)
    var long = parseFloat(position.coords.longitude)

    var initialRegion = {
      latitude: lat,
      longitude: long,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
    }

    this.setState({initialPosition: initialRegion})
    this.setState({markerPosition: initialRegion})
  }, 
  (error) => alert(JSON.stringify(error)),
  {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})

  this.watchID = navigator.geolocation.watchPosition((position) => {
    var lat = parseFloat(position.coords.latitude)
    var long = parseFloat(position.coords.longitude)

    var lastRegion = {
      latitude: lat,
      longitude: long,
      longitudeDelta: LONGITUDE_DELTA,
      latitudeDelta: LATITUDE_DELTA
    }

    this.setState({initialPosition: lastRegion})
    this.setState({markerPosition: lastRegion})

    var user = firebase.auth().currentUser;
    var uid;

    if (user != null) {
      uid = user.uid;
    } 
    workerRef.child(uid).set({
        latitude: lat,
        longitude: long,
      timestamp: Math.floor(Date.now() / 1000),
    });
    var that = this;
    let firebaseRef = firebase.database().ref().child('positions');
    var finished = [];
  
    firebaseRef.once('value', snapshot => {
      snapshot.forEach(function(data) {
      let result = data.val();
      result['key'] = data.key;
      finished.push(result);
  })
    }).then(function(){
      that.setState({
        workerMarker: finished
      })
    })
  })

}
setModalVisible(visible) {
  this.setState({modalVisible: visible});
}

componentWillUnmount() {
  navigator.geolocation.clearWatch(this.watchID)
}

      render() {
        showWorkerInfo = () => {
          this.setState({
            modalVisible : true
          })
        }
        
        return(

           <View style={styles.container}>

            <MapView style={styles.map}
                customMapStyle={this.mapStyle}
                region={this.state.initialPosition}>
          
                <MapView.Marker 
                coordinate={this.state.markerPosition}>
                <View style={styles.radius}>
                <View style={styles.marker}>
                </View>
                </View>
                </MapView.Marker>
                 { this.state.workerMarker.map(function(x){
                   return(
                   <MapView.Marker
                    onPress={(event) => this.showWorkerInfo(event)}
                   key={x.key}
                   image={require('../images/Star.png')}
                   coordinate={{
                    latitude: x.latitude,
                    longitude: x.longitude
                   }}>
                   
                   </MapView.Marker>
                   )
                 })} 
            </MapView>

            <Modal
                hardwareAccelerated={true}
                animationType="fade"
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                  alert('Rutan stängdes ner.');
                }}>
                <View style={styles.popUp}>
                <View style={styles.logoContainer}>
                  <Image style={styles.picture} source={require('../images/ProfileTemplate.png')} />
                  </View>
                  <View style={styles.infoText}>
                    <Text style={styles.largeText}>
                      KALLE BENGTSSON 
                    </Text>
                    <Text style={styles.largeText}>
                      SNITTBETYG: 3,6
                    </Text>
                    </View>

                    <View style={styles.modalButtons}>
                    <TouchableOpacity style={styles.buttonStyle}
                      onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                      }}>
                      <Text style={styles.buttonTextStyle}>GÅ VIDARE</Text>
                    </TouchableOpacity>
                  
                  

                  
                            <TouchableOpacity 
                            style={styles.buttonStyle} 
                            onPress={() => {
                              this.setModalVisible(!this.state.modalVisible);
                            }}> 
                            <Text style={styles.buttonTextStyle}>LETA VIDARE</Text>
                            </TouchableOpacity>


                    </View>
                </View>
              </Modal>


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
    radius: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        overflow: 'hidden',
        backgroundColor: 'rgba(0, 112, 255, 0.1)',
        borderWidth: 1,
        borderColor: 'rgba(0, 112, 255, 0.3)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    marker: {
      height: 20,
      width: 20,
      borderWidth: 3,
      borderColor: 'white',
      borderRadius: 20 / 2,
      overflow: 'hidden',
      backgroundColor: '#007AFF'
    },
    workerMarker: {
      height: 10,
      width: 10,

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
    largeText: {
      fontSize: 16,
      marginTop: 10,
      marginHorizontal: 20
    },
    mediumText: {
      fontSize: 14,

    },
    popUp: {
      marginTop: 120,
      height: 400,
      marginBottom: 70,
      marginLeft: 10,
      marginRight: 10,
      padding: 20,
      backgroundColor: '#ffffff',
      borderWidth: 0.5,
      borderColor: '#8e8e8e',
      borderRadius: 50,
    },
    logoContainer: {
      alignItems: 'center',
      justifyContent: 'center',
     
  },
    picture: {
      width: 100,
      height:100,
      borderRadius: 100,
},
buttonStyle: {
  marginHorizontal: 20,
  alignItems: 'center',
  backgroundColor: '#161616',
  height: 45,
  width: 150,
  marginVertical: 141,
  borderRadius: 35,
},
buttonTextStyle: {
  marginVertical: 10,
  textAlign: 'center',
  color: '#FFFFFF',
  fontSize: 18,
},
modalButtons: {
  marginTop: 38,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
},
infoText: {
  flexDirection: 'row',

  //justifyContent: 'space-between',
}
}) 
