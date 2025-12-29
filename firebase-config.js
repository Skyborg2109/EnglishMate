// Firebase Configuration
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChaeFq76JSzbhVPySz-Sr4C5M1sIum8Ow",
    authDomain: "englishmate-f42df.firebaseapp.com",
    projectId: "englishmate-f42df",
    storageBucket: "englishmate-f42df.firebasestorage.app",
    messagingSenderId: "221850465170",
    appId: "1:221850465170:web:7d835bbd4cd365bc16c74b",
    measurementId: "G-9JT57ZLW6B"
};

// Initialize Firebase (using compat SDK)
firebase.initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = firebase.auth();
const db = firebase.firestore();

// Export for use in other files
window.firebaseAuth = auth;
window.firebaseDB = db;
