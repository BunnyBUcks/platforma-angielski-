import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBjQbxdt8C7vsOQLcwS-_VXRMDoVZmUBM",
  authDomain: "angielski-z-ania-1.firebaseapp.com",
  projectId: "angielski-z-ania-1",
  storageBucket: "angielski-z-ania-1.firebasestorage.app",
  messagingSenderId: "486720379632",
  appId: "1:486720379632:web:77a5c03ca911848bef4035"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
