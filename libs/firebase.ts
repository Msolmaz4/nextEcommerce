// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCv1WWNTfQrMpp-o1O-A4jcNTv3HWibHWg",
  authDomain: "nextcommerce-6ae3b.firebaseapp.com",
  projectId: "nextcommerce-6ae3b",
  storageBucket: "nextcommerce-6ae3b.appspot.com",
  messagingSenderId: "485915767841",
  appId: "1:485915767841:web:f7904ce1ba9cb5c9985f60",
  measurementId: "G-3F84JGGM68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app