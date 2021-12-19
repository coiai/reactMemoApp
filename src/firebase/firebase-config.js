// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQJxgIyqmCflUI7WyMZMw6_j4GkcnPQjw",
  authDomain: "memoapp-test.firebaseapp.com",
  projectId: "memoapp-test",
  storageBucket: "memoapp-test.appspot.com",
  messagingSenderId: "890933412338",
  appId: "1:890933412338:web:18c9381d056b92c0276b6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
