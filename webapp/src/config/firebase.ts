/**
 * Firebase configuration and initialization.
 * Exports initialized Firebase app and core services for use throughout the application.
 */

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getConfig } from "./appConfig";

const config = getConfig();

// Firebase configuration using global config
const firebaseConfig = {
  apiKey: config.FIREBASE_API_KEY,
  appId: config.FIREBASE_APP_ID,
  authDomain: config.FIREBASE_AUTH_DOMAIN,
  messagingSenderId: config.FIREBASE_MESSAGING_SENDER_ID,
  projectId: config.FIREBASE_PROJECT_ID,
  storageBucket: config.FIREBASE_STORAGE_BUCKET,
  databaseURL: config.FIREBASE_DATABASE_URL,
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const storage = getStorage(app);
const database = getDatabase(app);
const firestore = getFirestore(app);

export { app, auth, firestore, storage, database };
