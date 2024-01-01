import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

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

initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const auth = getAuth(app);

export default app