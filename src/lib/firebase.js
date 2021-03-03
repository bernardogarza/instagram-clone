const config = {
  apiKey: 'AIzaSyCEPjb4vMNeGXvEekKaud-nFyKfoKhtS-k',
  authDomain: 'instagram-clone-bg.firebaseapp.com',
  projectId: 'instagram-clone-bg',
  storageBucket: 'instagram-clone-bg.appspot.com',
  messagingSenderId: '182120854412',
  appId: '1:182120854412:web:f4e9df0f6d5361cfcb9ca9',
};

let firebase;

!window.firebase.apps.length ? (firebase = window.firebase.initializeApp(config)) : firebase.app();

const { FieldValue } = window.firebase.firestore;

export { firebase, FieldValue };
