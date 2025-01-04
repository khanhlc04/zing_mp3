import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCmer_sV9Va1lflhR1QvBgIMhkQegToYCg",
  authDomain: "music-app-f2446.firebaseapp.com",
  databaseURL: "https://music-app-f2446-default-rtdb.firebaseio.com",
  projectId: "music-app-f2446",
  storageBucket: "music-app-f2446.firebasestorage.app",
  messagingSenderId: "583782194040",
  appId: "1:583782194040:web:026fd7857d2ad874f3468d",
  measurementId: "G-QXEHYS5305"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dbFirebase = getDatabase(app);