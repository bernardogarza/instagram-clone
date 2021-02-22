import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCEPjb4vMNeGXvEekKaud-nFyKfoKhtS-k',
  authDomain: 'instagram-clone-bg.firebaseapp.com',
  projectId: 'instagram-clone-bg',
  storageBucket: 'instagram-clone-bg.appspot.com',
  messagingSenderId: '182120854412',
  appId: '1:182120854412:web:f4e9df0f6d5361cfcb9ca9',
};

firebase.initializeApp(config);

const { FieldValue } = firebase.firestore;

export { firebase, FieldValue };
