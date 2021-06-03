import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDaPMk-o3ikz3mm649cpd95KunLhqLyqPg",
  authDomain: "nextjs-92202.firebaseapp.com",
  projectId: "nextjs-92202",
  storageBucket: "nextjs-92202.appspot.com",
  messagingSenderId: "813738781536",
  appId: "1:813738781536:web:c3d6e202f373f2ad2e4c05",
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()

export default db
