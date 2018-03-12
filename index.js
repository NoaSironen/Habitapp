import { AppRegistry } from 'react-native';
import App from './App';
AppRegistry.registerComponent('Habitapp', () => App); //Rootcomponents register with this and then the native system can load the 
                                                      //bundle for the app and then run the app when it i ready by
                                                      //invoking AppRegistry.runApplication // looks ugly with the lines fix this later
import { Platform } from 'react-native';
import firebase from 'react-native-firebase';

// pluck values from your `GoogleService-Info.plist` you created on the firebase console
const iosConfig = {
  clientId: 'com.googleusercontent.apps.332427944364-ip8fupentvo3sju22nl1s3vlclcqfqbe',
  appId: '1:332427944364:ios:b87891451c241f00',
  apiKey: 'AIzaSyCHzLR9gV58-8ZbPpoVKe8n8nS7507eUbo',
  databaseURL: 'https://habitapp-88060.firebaseio.com',
  storageBucket: 'habitapp-88060.appspot.com',
  messagingSenderId: '332427944364',
  projectId: 'habitapp-88060',

  // enable persistence by adding the below flag
  persistence: true,
};

// pluck values from your `google-services.json` file you created on the firebase console
const androidConfig = {
  clientId: '332427944364-uv4cs2uumh7p66jkc5rlo1tkbm6hgs4l.apps.googleusercontent.com',
  appId: '1:332427944364:android:b87891451c241f00',
  apiKey: 'AIzaSyBTtCPyMd158nKeq1O2-l_a1UXh-05-PQ0',
  databaseURL: 'https://habitapp-88060.firebaseio.com',
  storageBucket: 'habitapp-88060.appspot.com',
  messagingSenderId: '332427944364',
  projectId: 'habitapp-88060',

  // enable persistence by adding the below flag
  persistence: true,
};

const Habitapp = firebase.initializeApp(
  // use platform specific firebase config
  Platform.OS === 'ios' ? iosConfig : androidConfig,
  // name of this app
  'Habitapp',
);

// dynamically created apps aren't available immediately due to the
// asynchronous nature of react native bridging, therefore you must
// wait for an `onReady` state before calling any modules/methods
// otherwise you will most likely run into `app not initialized` exceptions
Habitapp.onReady().then((app) => {
   // --- ready ---
   // use `app` arg, kittensApp var or `app('kittens')` to access modules
   // and their methods. e.g:
   firebase.app('Habitapp').auth().signInAnonymously().then((user) => {
       console.log('Habitapplication user ->', user.toJSON());
   });
});