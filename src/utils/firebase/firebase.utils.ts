import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "./firebase-config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

export const createNewUser = (email: string, password: string) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      const newUser = userCredentials.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.errorMessage;
    });
};
