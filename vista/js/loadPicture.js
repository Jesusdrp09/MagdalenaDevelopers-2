import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getDatabase, get, ref as refD, child, set } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-database.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-storage.js";

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
const database = getDatabase(app);
const storage = getStorage(app);

const dbRef = refD(database);

let fileInput = document.getElementById("imgInput");
$("#imgInput").attr("accept","image/*");
$("#guardarCambios").click(function(){
    let file = fileInput.files[0];
    console.log(child(dbRef, 'datosNoticias'));
    get(child(dbRef, 'datosNoticias')).then((snapshot) => {
        let data;
        let id = 0;
        if(snapshot.exists()){
            data = snapshot.val();
            snapshot.forEach((d) => {
                if(parseInt(d.key) > id){
                    id = parseInt(d.key);
                }
            });
            id += 1;
            let fileRef = ref(storage, "newspics/"+id);
            uploadBytes(fileRef, file).then((snapshot) =>{
                console.log("Photo uploaded");
                getDownloadURL(fileRef).then((downloadURL) => {
                    console.log("Photo uploaded and the downloadURL is: "+downloadURL);
                    set(child(dbRef, 'datosNoticias/'+id),{
                        titulo: $("#Titulo").val(),
                        fecha: "2002-12-19",
                        descripcion : $("#descripcionNoticia").val(),
                        photoURL : downloadURL,
                        urlNoticia: $("#url").val()
                    }).then(() =>{
                        alert("Se añadió la noticia")
                    }).catch((error) => {
                        console.log(error);
                    });
                });
            }).catch((error) =>{
                console.log(error);
            });
        }
    }).catch((error) =>{
        console.log(error);
    });
});