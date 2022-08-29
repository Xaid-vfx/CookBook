import firebaseConfig from './firebaseconfig'
import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import { getStorage, uploadBytes,ref } from "firebase/storage";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseApp =initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage= getStorage(firebaseApp)



