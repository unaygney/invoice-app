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
  doc,
  getDocs,
  addDoc,
  getDoc,
  setDoc,
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
    const userDocData = await createUserDocWithUid(user.uid);

    return user;
  } catch (error) {
    throw new Error("encontured error", e);
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

// get current user's data
export const getDataWithUid = async (uid) => {
  const docRef = doc(db, "orders", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    throw new Error("No such document!");
  }
};

//Create user data with custom id
export const createUserDocWithUid = async (uid) => {
  try {
    const userCollectionRef = doc(db, "orders", uid);
    const docRef = await setDoc(userCollectionRef, { invoices: [] });
    return docRef;
  } catch (e) {
    throw new Error("createuser doc with uid error", e);
  }
};
