import "dotenv/config";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.APIKEY, 
    authDomain: process.env.AUTHDOMAIN, 
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET, 
    messagingSenderId: process.env.MESSAGINGSENDERID, 
    appId: process.env.APPID, 
    measurementId: process.env.MEASUREMENTID
}

const firebase = initializeApp(firebaseConfig); 

export default firebase;
