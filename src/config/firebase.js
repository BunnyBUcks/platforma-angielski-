import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKIJNMdT8lq2eELJsodRe5ibia-sxmN_M",
  authDomain: "angielski-z-ania.firebaseapp.com",
  projectId: "angielski-z-ania",
  storageBucket: "angielski-z-ania.firebasestorage.app",
  messagingSenderId: "487773922284",
  appId: "1:487773922284:web:2b215b00afa4550219d6c9",
  measurementId: "G-33WZHEC8Q4"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
