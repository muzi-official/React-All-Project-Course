import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCHlB5L-Ks4LJimPeiueCm2BTppZoNwv-U",
    authDomain: "olx-clone-89f98.firebaseapp.com",
    databaseURL: "https://olx-clone-89f98.firebaseio.com",
    projectId: "olx-clone-89f98",
    storageBucket: "olx-clone-89f98.appspot.com",
    messagingSenderId: "366920855579",
    appId: "1:366920855579:web:93c7b328903dba240748be"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;