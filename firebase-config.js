// ====================================================
// 🔥 SATARA JOBS - FIREBASE CONFIG (COMPAT STYLE)
// ====================================================

const firebaseConfig = {
  apiKey: "AIzaSyDVPmjmCUsJWVImkCDYVtVs52VLg0ufFtI",
  authDomain: "satara-jobs-ed6ab.firebaseapp.com",
  projectId: "satara-jobs-ed6ab",
  storageBucket: "satara-jobs-ed6ab.appspot.com",
  messagingSenderId: "688594836150",
  appId: "1:688594836150:web:a59ecda1d87b599862a417"
};

// ====================================================
// 🚀 FIREBASE INITIALIZE
// ====================================================
try {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    console.log("✅ Satara Jobs Firebase Connected Successfully!");
  } else {
    console.log("ℹ️ Firebase Already Initialized.");
  }
} catch (error) {
  console.error("❌ Firebase Connection Failed:", error.message);
}

// ====================================================
// 📦 GLOBAL SERVICES
// ====================================================
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

// ====================================================
// ⚙️ FIRESTORE SETTINGS (Offline Support)
// ====================================================
db.settings({
  cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
});

db.enablePersistence()
  .then(() => console.log("📶 Offline Mode Enabled!"))
  .catch((err) => {
    if (err.code === "failed-precondition") {
      console.warn("⚠️ Multiple tabs open - Offline mode disabled.");
    } else if (err.code === "unimplemented") {
      console.warn("⚠️ Browser does not support offline mode.");
    }
  });