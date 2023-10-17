// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore} from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9GiWLHiTLdVVF1Z5htIbM896PXdYLASc",
    authDomain: "webos-67e5b.firebaseapp.com",
    projectId: "webos-67e5b",
    storageBucket: "webos-67e5b.appspot.com",
    messagingSenderId: "575997681615",
    appId: "1:575997681615:web:7497bafe97690cda7bbcba",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);

