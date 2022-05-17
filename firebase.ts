// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDhBOwniC6MTwHjAj28z4lbW83wjqE9S24',
  authDomain: 'vcnetfilx-clone.firebaseapp.com',
  projectId: 'vcnetfilx-clone',
  storageBucket: 'vcnetfilx-clone.appspot.com',
  messagingSenderId: '671269928588',
  appId: '1:671269928588:web:43cf7e74f17a53650145a9',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
