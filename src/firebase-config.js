// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: `${process.env.REACT_APP_API_KEY}`,
//   authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
//   projectId: `${process.env.REACT_APP_PROJECT_ID}`,
//   storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
//   messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}`,
//   appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`
apiKey: "AIzaSyAGJwbe89rrQJdfuyiPTrgPuw1tFf7z1mI",
authDomain: "news-feed-api-dev.firebaseapp.com",
projectId: "news-feed-api-dev",
storageBucket: "news-feed-api-dev.appspot.com",
messagingSenderId: "114504147747",
appId: "1:114504147747:web:ebd420d1dfbe0a82926296"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);