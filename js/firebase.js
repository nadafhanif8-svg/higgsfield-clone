// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔥 Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyD9Zowtls0GrrGOYayWXrOHZjwG6yumlBc",
  authDomain: "auragen-2b036.firebaseapp.com",
  projectId: "auragen-2b036",
  storageBucket: "auragen-2b036.appspot.com",
  messagingSenderId: "1034283501538",
  appId: "1:1034283501538:web:4840b9458d45f522f7dbbb"
};

// 🚀 Init Firebase (SAFE)
const app = initializeApp(firebaseConfig);

// 🔐 Auth
export const auth = getAuth(app);

// 🗄 Firestore
export const db = getFirestore(app);
