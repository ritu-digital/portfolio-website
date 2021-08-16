import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBllVrFHWCNOylAOkC1jgbNdRoVCvYWvxs',
  authDomain: 'portfolio-contact-aa5d4.firebaseapp.com',
  projectId: 'portfolio-contact-aa5d4',
  storageBucket: 'portfolio-contact-aa5d4.appspot.com',
  messagingSenderId: '326290187325',
  appId: '1:326290187325:web:16959298a8d03b1f49f654',
});

var db = firebaseApp.firestore();

export { db };
