import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBNoVHLz1XDHzLOitpU3I8oZGGAd7JJjTU",
    authDomain: "pokedex-d3032.firebaseapp.com",
    projectId: "pokedex-d3032",
    storageBucket: "pokedex-d3032.appspot.com",
    messagingSenderId: "94461306985",
    appId: "1:94461306985:web:442ba002fc76768eb71af8",
    measurementId: "G-7GWZ79MBCJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app