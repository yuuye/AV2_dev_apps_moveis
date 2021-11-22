import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCDYLtsf9nZr92-Gw1Bp4ztVavpyWc3BKQ",
    authDomain: "projeto-mpv-app.firebaseapp.com",
    projectId: "projeto-mpv-app",
    storageBucket: "projeto-mpv-app.appspot.com",
    messagingSenderId: "403354066620",
    appId: "1:403354066620:web:f6e3ea4bad506be232bab9"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;