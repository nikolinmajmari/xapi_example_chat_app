// Firebase uses XMLHttpRequest instead of `fetch()`, so we need to provide a
// polyfill for it.
import "https://deno.land/x/xhr@0.1.1/mod.ts";

// Firebase for the web by default stores authenticated sessions in
// localStorage.  This polyfill will allow us to "extract" the localStorage and
// send it to the client as cookies.
import { installGlobals } from "https://deno.land/x/virtualstorage@0.1.0/mod.ts";

// Since Deploy is browser-like, we will use the Firebase web client libraries
// importing in just what we need for this tutorial. We are using the ESM
// links from https://firebase.google.com/docs/web/setup.
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
import { getFirestore, collection, addDoc, deleteDoc, getDocs,doc,getDoc,setDoc, query, where } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';
import firebaseConfig from "./firebaseconfig.js";
// This will install the polyfill for localStorage
installGlobals();


const firebaseApp = initializeApp(firebaseConfig, "xapi-chat-app");
const _db = getFirestore(firebaseApp);
export const db = {
  db:_db,
  collection, addDoc, deleteDoc, getDocs, query, where,doc,getDoc,setDoc,
}
export default firebaseApp ;