// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyAGJwbe89rrQJdfuyiPTrgPuw1tFf7z1mI",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);