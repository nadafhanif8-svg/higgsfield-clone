import { initializeApp, getApps, getApp } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getAuth } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD9Z0wtLs0GrrGOYayWXrOHZjvG6yumLBc",
  authDomain: "auragen-2b036.firebaseapp.com",
  projectId: "auragen-2b036",
  storageBucket: "auragen-2b036.appspot.com",
  messagingSenderId: "1034283501538",
  appId: "1:1034283501538:web:4840b9458d45f522f7dbbb"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
