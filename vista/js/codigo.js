// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getDatabase, set, get, onValue, ref, child } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-database.js";

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
const dbRef = ref(database);

function obtenerInfo(){
    let data;
    let arrayUsers;
    get(child(dbRef, 'datosUsuarios/')).then((snapshot) => {
        if (snapshot.exists()) {
          data = snapshot.val();
          arrayUsers = Object.values(data);
          let limite = 3;
          for(let i = 0; i < limite; i++){
            if(arrayUsers[i].rol != 2){
              $("<div></div>", {"class": "datosPerfil", "id":"datosperfil"+i}).appendTo("#contenedorPerfiles");
              
              $("<div></div>", {"class": "perfil", "id":"perfil"+i}).appendTo("#datosperfil"+i);
              $("<img>", {"src": "vista/img/habilidades-desarrollador-web.jpg", "id":"imgPerfil"+i}).appendTo("#perfil"+i);
              $("<div></div>", {"class": "descripcion", "id":"descripcionperfil"+i}).appendTo("#perfil"+i);
              $("<h2></h2>",{"class":"nombre", "id":"h2id"+i}).appendTo("#descripcionperfil"+i);
              $("#h2id"+i).text(arrayUsers[i].nombreCompleto);
              $("<p></p>", {"class": "lenguajes", "id":"lenguajeid"+i}).appendTo("#descripcionperfil"+i);
              $("<p></p>", {"class": "description", "id":"descripcionid"+i}).appendTo("#descripcionperfil"+i);
              $("#lenguajeid"+i).html("<b>Lenguajes: </b>"+arrayUsers[i].lenguajes);
              $("#descripcionid"+i).html("<b>Descripción: </b>"+arrayUsers[i].descripcion);
            }else{
              limite += 1;
            }
          }
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
    });
}

let logo = document.getElementById("logo");
let iniciarSesion = document.getElementById("iniciar-sesion");
let btnIniciar = document.getElementById("ingresarIS");

$(document).ready(function() {
  $('a[href^="#"]').click(function() {
    var destino = $(this.hash); //this.hash lee el atributo href de este
    $('html, body').animate({ scrollTop: destino.offset().top - 64}, 700); //Llega a su destino con el tiempo deseado
    return false;
  });
});

logo.onclick = ()=>{
  let estilos = document.getElementById("estilosblanco");
  if(estilos.getAttribute("href") == "vista/css/estilosblanco.css"){
    estilos.setAttribute("href", "");
  }else{
    estilos.setAttribute("href", "vista/css/estilosblanco.css");
  }
}

iniciarSesion.onclick = ()=>{
  let dialog = document.getElementById("inicioSesionDialog");
  let estilo = dialog.getAttribute("style");
  if(estilo.toString() == "display: none;"){
    dialog.setAttribute("style","display: fixed;")
  }else{
    dialog.setAttribute("style","display: none;")
  }
}

btnIniciar.onclick = ()=>{
  let email = document.getElementById("emailInput").value;
  if(validarEmail(email)){
    newemail = '"'+email+'"';
    document.forms["formIniciarSesion"]["emailInput"].value = newemail;
    document.getElementById("formIniciarSesion").submit();
    document.forms["formIniciarSesion"]["emailInput"].value = email;
  }else{
    alert("Inserte un correo válido");
  }
}

function validarEmail(correo){
  let regExCorreo = new RegExp("[A-Za-z0-9\W]+@+[a-z]+\.+[a-z]{2,3}","g");
    let correoAdd = regExCorreo.exec(correo);
    try {
        if(correoAdd[0] == correo){
            return true;
        }else{
            return false;
        } 
    } catch (e) {
        if(e instanceof TypeError){
            console.log("error de valor nulo");
        }
    }
}

window.addEventListener("click", e =>{
  let iniciarSesionDialog = document.getElementById("inicioSesionDialog");
  let estilo = iniciarSesionDialog.getAttribute("style");
  let iniciarSesionCard = document.getElementById("iniciarSesion");
  let childs = true;
  let iniciarSesionCardChilds = iniciarSesionCard.children;

  for(let i = 0; i < iniciarSesionCardChilds.length;i++){
    if(e.target == iniciarSesionCardChilds[i]){
      childs = childs && false;
    }
  }

  if(estilo == "display: fixed;" && e.target == iniciarSesionDialog && (!childs || e.target != iniciarSesionCard)){
    iniciarSesionDialog.setAttribute("style","display: none;");
    console.log("cerrar");
  }
});

obtenerInfo();