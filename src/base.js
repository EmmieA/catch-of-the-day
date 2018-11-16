import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDHqUezZXsfG7s3L-a90sqb5tIrxv8E4uQ",
        authDomain: "catch-of-the-day-mea01.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-mea01.firebaseio.com"
        // projectId: "catch-of-the-day-mea01",
        // storageBucket: "catch-of-the-day-mea01.appspot.com",
        // messagingSenderId: "463489061390"
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;