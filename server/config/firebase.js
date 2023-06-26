const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");
const { getFirestore } = require("firebase/firestore");
const { getStorage } = require("firebase/storage");
const dotenv = require("dotenv");

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SERVER_ID,
  appId: process.env.APP_ID,
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
