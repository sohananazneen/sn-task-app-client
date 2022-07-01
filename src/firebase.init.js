// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXHoknLbCpiJ3i0NdMS6eq3k449fVMB-c",
    authDomain: "sn-task-app.firebaseapp.com",
    projectId: "sn-task-app",
    storageBucket: "sn-task-app.appspot.com",
    messagingSenderId: "401733043895",
    appId: "1:401733043895:web:ba20ecca4a4282233aaf32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;