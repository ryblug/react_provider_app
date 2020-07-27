const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const GOOGLE_API_KEY = '';
const GOOGLE_CALENDAR_CLIENT_ID = '';
const GOOGLE_SCOPE = '';
const DISCOVERY_DOCS = [""];
const STRIPE_KEY = '';

module.exports = {db, GOOGLE_API_KEY, GOOGLE_CALENDAR_CLIENT_ID, GOOGLE_SCOPE, STRIPE_KEY, DISCOVERY_DOCS};