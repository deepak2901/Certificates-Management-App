const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");
const { getFirestore } = require("firebase/firestore");
const { getStorage } = require("firebase/storage");

const firebaseConfig = {
  apiKey: "AIzaSyBJyWHMeVHao9aJfToBb3Gu6hTEnZHmhqU",
  authDomain: "certificates-monitoring-tool.firebaseapp.com",
  projectId: "certificates-monitoring-tool",
  storageBucket: "certificates-monitoring-tool.appspot.com",
  messagingSenderId: "937643208810",
  appId: "1:937643208810:web:6b3cddcc7cf306ee1ada13",
};

const firebase = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Firestore (optional)
const auth = getAuth(firebase);
const firestore = getFirestore(firebase);
const storage = getStorage(firebase);

module.exports = {
  firebase,
  auth,
  firestore,
  storage
};
