import { initializeApp } from 'firebase/app'
import { getFirestore }  from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_PROJECT_ID + '.firebaseapp.com',
  databaseURL: 'https://' + import.meta.env.VITE_FIREBASE_PROJECT_ID + '.firebaseio.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_PROJECT_ID + '.appspot.com'
}

const FirebaseApp = initializeApp(firebaseConfig);

// init & export firestore service
export const db = getFirestore()
// generate & export auth object
export const auth = getAuth(FirebaseApp)