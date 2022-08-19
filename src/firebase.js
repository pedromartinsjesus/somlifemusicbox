// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
/* import { getAnalytics } from "firebase/analytics"; */
import { getFirestore } from "@firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCvdTKv1bnEQqVJqY1_o-RZu3-CuEc2M_0",
    authDomain: "somlife-fc4a3.firebaseapp.com",
    projectId: "somlife-fc4a3",
    storageBucket: "somlife-fc4a3.appspot.com",
    messagingSenderId: "293485348087",
    appId: "1:293485348087:web:7b474d3812bb0da311fff2",
    measurementId: "G-40TCFGBL8K"
};

// Initialize Firebase

/* export const analytics = getAnalytics(firebaseConfigApp); */




export const appConfig = initializeApp(firebaseConfig);
export const db = getFirestore();


/* export function checkUser() {
    const auth = getAuth(appConfig)
    let userApp;

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            userApp = user.displayName;
            // ...
        } else {
            // User is signed out
            // ...
        }
    })


    return userApp ? userApp : "NADA"
} */



