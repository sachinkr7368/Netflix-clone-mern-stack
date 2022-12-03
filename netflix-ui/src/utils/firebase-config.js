import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // apiKey: "AIzaSyC1Hf0_rdWLBzDPJPcO9CJN4y6M6-EgKH4",
  // authDomain: "react-auth-6788d.firebaseapp.com",
  // projectId: "react-auth-6788d",
  // storageBucket: "react-auth-6788d.appspot.com",
  // messagingSenderId: "131797845021",
  // appId: "1:131797845021:web:3f7ff4766e2b89ca5d32f4",
  // measurementId: "G-VWPBR1NSLL",
  apiKey: "AIzaSyDTcUb7Nq8IidEfoX0HhADWnOg6JatcwIk",
  authDomain: "react-netflix-clone.firebaseapp.com",
  projectId: "reac-netflix-clone",
  storageBucket: "reac-netflix-clone.appspot.com",
  messagingSenderId: "743359442964",
  appId: "1:743359442964:web:594f4f5c8f8ca21a2db701",
  measurementId: "G-B24D97SPQG"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
