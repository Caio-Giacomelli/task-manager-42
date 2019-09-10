import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCKsqw8LonAj3jSrhixxDBKmQgGzBbaGS4",
    authDomain: "todoist-inspire.firebaseapp.com",
    databaseURL: "https://todoist-inspire.firebaseio.com",
    projectId: "todoist-inspire",
    storageBucket: "todoist-inspire.appspot.com",
    messagingSenderId: "423688420386",
    appId: "1:423688420386:web:6d071203eade72121fde7b"
});

export { firebaseConfig as firebase };