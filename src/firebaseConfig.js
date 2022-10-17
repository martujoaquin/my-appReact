import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBh5CsvVnE92i2v6KuODEJe0YRDpqkIX04",
    authDomain: "my-app-coderhouse-react.firebaseapp.com",
    projectId: "my-app-coderhouse-react",
    storageBucket: "my-app-coderhouse-react.appspot.com",
    messagingSenderId: "642623422649",
    appId: "1:642623422649:web:377a038dafd314fe8bdb68",
    measurementId: "G-2RQ0082BRT"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);