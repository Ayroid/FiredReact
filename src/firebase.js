import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBuCJQeN-DDO6YlzNtcIbB5hfoFBmOTRgA",
  authDomain: "ayroid.firebaseapp.com",
  projectId: "ayroid",
  storageBucket: "ayroid.appspot.com",
  messagingSenderId: "108184020364",
  appId: "1:108184020364:web:0c87fa8fc8a2a015bca2a9",
  databaseURL: "https://ayroid-default-rtdb.firebaseio.com/"
};

export const app = initializeApp(firebaseConfig);