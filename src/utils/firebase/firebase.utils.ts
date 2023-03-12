import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCxslWa-qoo1fA9pUkD72fdrjcVbtT5wTo",
  authDomain: "pinterestclone-f1558.firebaseapp.com",
  projectId: "pinterestclone-f1558",
  storageBucket: "pinterestclone-f1558.appspot.com",
  messagingSenderId: "247251837693",
  appId: "1:247251837693:web:973a5600203c07248c9494",
  measurementId: "G-8ZJMEF125L",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
