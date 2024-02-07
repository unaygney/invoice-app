// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore/lite";
// config
const firebaseConfig = {
  apiKey: process.env.NEXT_APP_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_APP_FIREBASE_APP_ID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
export const currentUser = auth.currentUser;

// Get a list of orders from your database
export async function getOrders() {
  const ordersCol = collection(db, "orders");
  const orderSnapshot = await getDocs(ordersCol);
  const orderList = orderSnapshot.docs.map((doc) => doc.data());
  return orderList;
}

// Create User
export async function createUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    const errorMessage = error.message;
    throw errorMessage;
  }
}

// LOGIN
export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    const errorMessage = error.message;
    throw errorMessage;
  }
};

// export const getSignOut = async () => {
//   signOut(auth)
//     .then(() => {
//       console.log("Sign-out successful");
//     })
//     .catch((error) => {
//       throw new Error("An error happened while signing out", error);
//     });
// };

// try {
//   const docRef = await addDoc(collection(db, "orders"), {
//     first: "Alan",
//     middle: "Mathison",
//     last: "Turing",
//     born: 1912,
//   });

//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }
