import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-storage.js";
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyAiWe1mOBsqvzD-AaACR7itNloHUYGe8fY",
    authDomain: "practica-228ed.firebaseapp.com",
    databaseURL: "https://practica-228ed-default-rtdb.firebaseio.com",
    projectId: "practica-228ed",
    storageBucket: "practica-228ed.appspot.com",
    messagingSenderId: "377221506090",
    appId: "1:377221506090:web:5aa745c062f6d6963a4f53",
    measurementId: "G-MCSBZT68Z1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage(app);

$("#imgInput").attr("accept","image/*");
$("#imgInput").change(function(e){
    let file = e.target.files[0];
    let fileRef = ref(storage, "profilepics/"+auth.currentUser.uid);
    uploadBytes(fileRef, file).then((snapshot) =>{
        getDownloadURL(fileRef).then((downloadURL) => {
            console.log("Photo uploaded and the downloadURL is: "+downloadURL);
            $("#imagenPerfil").attr("src", downloadURL);
        });
    });
});