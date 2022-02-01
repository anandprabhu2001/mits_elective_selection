import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBsqs3TVPMTdWd932Ci0sp28OoxoacQJ1k",
  authDomain: "mits-elective-selection.firebaseapp.com",
  projectId: "mits-elective-selection",
  storageBucket: "mits-elective-selection.appspot.com",
  messagingSenderId: "836171627499",
  appId: "1:836171627499:web:dafbed67300f4e1dacb7ae",
  measurementId: "G-R92V4J4XED"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);