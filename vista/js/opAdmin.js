// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-analytics.js";
import { getDatabase, set, get, onValue, ref, child } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
// const analytics = getAnalytics(app);
const auth = getAuth();
const database = getDatabase(app);

const dbRef = ref(database);

function setDataUser(user, nombreC, lenguajesDBC, descripcionDBC, i){
  set(child(dbRef, 'datosUsuarios/'+user.uid), {
    nombreCompleto: nombreC,
    lenguajes: lenguajesDBC,
    descripcion : descripcionDBC,
    uid: user.uid
  }).then(() =>{
    $("#h2id"+i).text(nombreC);
    $("#lenguajeid"+i).html("<b>Lenguajes: </b>"+lenguajesDBC);
    $("#descripcionid"+i).html("<b>Descripción: </b>"+descripcionDBC);
  });
}

function obtenerInfo(){
    let data;
    let arrayUsers;
    get(child(dbRef, 'datosUsuarios/')).then((snapshot) => {
        if (snapshot.exists()) {
          data = snapshot.val();
          arrayUsers = Object.values(data);
          for(let i = 0; i < arrayUsers.length; i++){
            if(arrayUsers[i].rol != 2){
              $("<div></div>", {"class": "datosPerfil", "id":"datosperfil"+i}).appendTo("#contenedorPerfiles");
              
              $("<div></div>", {"class": "perfil", "id":"perfil"+i}).appendTo("#datosperfil"+i);
              $("<img>", {"src": "../img/habilidades-desarrollador-web.jpg", "id":"imgPerfil"+i}).appendTo("#perfil"+i);
              $("<div></div>", {"class": "descripcion", "id":"descripcionperfil"+i}).appendTo("#perfil"+i);
              $("<h2></h2>",{"class":"nombre", "id":"h2id"+i}).appendTo("#descripcionperfil"+i);
              $("#h2id"+i).text(arrayUsers[i].nombreCompleto);
              $("<p></p>", {"class": "lenguajes", "id":"lenguajeid"+i}).appendTo("#descripcionperfil"+i);
              $("<p></p>", {"class": "description", "id":"descripcionid"+i}).appendTo("#descripcionperfil"+i);
              $("#lenguajeid"+i).html("<b>Lenguajes: </b>"+arrayUsers[i].lenguajes);
              $("#descripcionid"+i).html("<b>Descripción: </b>"+arrayUsers[i].descripcion);

              $("<div></div>", {"class":"datosMod", "style":"display: none;", "id":"datosModificar"+i}).appendTo("#datosperfil"+i);
              
              $("<div></div>", {"class":"campoNombreCompleto", "id":"campoNombreCompletoID"+i}).appendTo("#datosModificar"+i);
              $("<label></label>", {"for":"nombreCompletoDB"+i , "id":"labelNombreCompletoDB"+i}).appendTo("#campoNombreCompletoID"+i);
              $("#labelNombreCompletoDB"+i).text("Nombre completo:");
              $("<input>", {"type":"text", "value": arrayUsers[i].nombreCompleto, "id":"nombreCompletoDB"+i}).appendTo("#labelNombreCompletoDB"+i);

              $("<div></div>", {"class":"campoLenguajes", "id":"campoLenguajesID"+i}).appendTo("#datosModificar"+i);
              $("<label></label>", {"for":"lenguajesDB"+i , "id":"labellenguajesDB"+i}).appendTo("#campoLenguajesID"+i);
              $("#labellenguajesDB"+i).text("Lenguajes:");
              $("<input>", {"type":"text", "value": arrayUsers[i].lenguajes, "id":"lenguajesDB"+i}).appendTo("#labellenguajesDB"+i);

              $("<div></div>", {"class":"campoDescripcion", "id":"campoDescripcionID"+i}).appendTo("#datosModificar"+i);
              $("<label></label>", {"for":"descripcionDB"+i , "id":"labelDescripcionDB"+i}).appendTo("#campoDescripcionID"+i);
              $("#labelDescripcionDB"+i).text("Descripción:")
              $("<input>", {"type":"text", "value": arrayUsers[i].descripcion, "id":"descripcionDB"+i}).appendTo("#labelDescripcionDB"+i);
              
              $("<input>", {"type":"button", "class":"guardarcambiosbtn", "value":"Guardar cambios", "id":"guardarcambiosbtnID"+i}).appendTo("#datosModificar"+i);
              $("<input>", {"type":"button", "class":"eliminarusuariobtn", "value":"Eliminar usuario", "id":"eliminarusuariobtnID"+i}).appendTo("#datosModificar"+i);


              $("#guardarcambiosbtnID"+i).click(() => {
                setDataUser(arrayUsers[i], $("#nombreCompletoDB"+i).val(), $("#lenguajesDB"+i).val(), $("#descripcionDB"+i).val(), i)
              });

              $("#imgPerfil"+i).click(() =>{
                $("#datosModificar"+i).toggle(1000);
              });
            }
          }
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
    });
}

obtenerInfo();

let logo = document.getElementById("logo");
let iniciarSesion = document.getElementById("iniciar-sesion");

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