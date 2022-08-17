// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);

export default firebase;