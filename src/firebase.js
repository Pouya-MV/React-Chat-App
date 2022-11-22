import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDOFbwo9dO70GUSxc2XVTJ7QdsljwIGYCE",
    authDomain: "chat-app-14f22.firebaseapp.com",
    projectId: "chat-app-14f22",
    storageBucket: "chat-app-14f22.appspot.com",
    messagingSenderId: "923539073396",
    appId: "1:923539073396:web:44f764ad74606c3983a421",
  })
  .auth();
