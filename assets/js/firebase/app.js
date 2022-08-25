  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAHEqEy4q4mVqtJlfiDu7b2TKAoEbumPO0",
    authDomain: "projeto-teste-d43c7.firebaseapp.com",
    projectId: "projeto-teste-d43c7",
    storageBucket: "projeto-teste-d43c7.appspot.com",
    messagingSenderId: "475933522317",
    appId: "1:475933522317:web:3db1c14adda5b36f4365c4"
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  
  export default app