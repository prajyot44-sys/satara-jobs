const firebaseConfig = {
  apiKey: "AIzaSyDVPmjmCUsJWVImkCDYVtVs52VLg0ufFtI",
  authDomain: "satara-jobs-ed6ab.firebaseapp.com",
  projectId: "satara-jobs-ed6ab",
  storageBucket: "satara-jobs-ed6ab.appspot.com",
  messagingSenderId: "688594836150",
  appId: "1:688594836150:web:a59ecda1d87b599862a417"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();