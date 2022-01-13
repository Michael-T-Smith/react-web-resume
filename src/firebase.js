  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
  
  const firebaseConfig = {
    apiKey: "AIzaSyC5Pmkjte7VV11O-Qb_GzcLCJKDwwXDrKY",
    authDomain: "clone-b2a90.firebaseapp.com",
    projectId: "clone-b2a90",
    storageBucket: "clone-b2a90.appspot.com",
    messagingSenderId: "1058257381913",
    appId: "1:1058257381913:web:99a2b757e6fe026a941888",
    measurementId: "G-CY7G7TCFDV"
  };
  
 
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);