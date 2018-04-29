import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyAkTsoW7lTAUK0b9EP9HFwb8Mk1ZPBb7aQ",
    authDomain: "prestruc-7eb0c.firebaseapp.com",
    databaseURL: "https://prestruc-7eb0c.firebaseio.com",
    projectId: "prestruc-7eb0c",
    storageBucket: "",
    messagingSenderId: "622426449614"

  });

  export const db = app.database();
  export const TA1 = db.ref('TA1');
  export const TA2 = db.ref('TA2');
  export const TA3 = db.ref('TA3');
  export const TA4 = db.ref('TA4');
  export const add = db.ref('add');

  