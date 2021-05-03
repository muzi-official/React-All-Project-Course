import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC7Xz23lVmS-SDF2q5wvH3UobAri4hPSCg",
    authDomain: "crud-app-1a008.firebaseapp.com",
    projectId: "crud-app-1a008",
    storageBucket: "crud-app-1a008.appspot.com",
    messagingSenderId: "125432062247",
    appId: "1:125432062247:web:15168eaa9f37f319090902"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;
