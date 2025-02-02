// firebase-config.js

// Firebase configuration - replace these with your actual config values
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVp0nIDZClQXwkYjvEQAhGW73W98QEVio",
    authDomain: "kalolnew-b82f3.firebaseapp.com",
    projectId: "kalolnew-b82f3",
    storageBucket: "kalolnew-b82f3.firebasestorage.app",
    messagingSenderId: "989301878012",
    appId: "1:989301878012:web:5ed3f0b591011e2731fb79",
    measurementId: "G-EZC39EVLEJ"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  // Export db for use in other scripts if using modules (optional)
  // For a module-based approach, you can uncomment the following line and load as type="module"
  // export { db };
  