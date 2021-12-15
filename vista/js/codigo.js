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

function obtenerInfoPorFiltros(leng, tipoProg, nivelIng){
    let data;
    let arrayUsers;
    console.log(leng+" "+tipoProg+" "+nivelIng);
    get(child(dbRef, 'datosUsuarios/')).then((snapshot) => {
        if (snapshot.exists()) {
          data = snapshot.val();
          arrayUsers = Object.values(data);
          let limite = 3;
          let flag1 = true;
          let flag2 = true;
          let flag3 = true;
          for(let i = 0; i < limite; i++){

            if(leng == 1){
              flag1 = true;
            }else{
              if(arrayUsers[i].lenguajes.includes(leng)){
                flag1 = true;
              }else{
                flag1 = false;
              }
            }

            if(tipoProg == 1){
              flag2 = true;
            }else{
              if(tipoProg == arrayUsers[i].nivelProgramacion){
                flag2 = true;
              }else{
                flag2 = false;
              }
            }

            if(nivelIng == 1){
              flag3 = true;
            }else{
              if(nivelIng == arrayUsers[i].nivelIngles){
                flag3 = true;
              }else{
                flag3 = false;
              }
            }
            if(arrayUsers[i].rol != 2 && flag1 && flag2 && flag3){
              $("<div></div>", {"class": "datosPerfil", "id":"datosperfil"+i}).appendTo("#contenedorPerfiles");
              $("<div></div>", {"class": "perfil", "id":"perfil"+i}).appendTo("#datosperfil"+i);
              $("<img>", {"src": "vista/img/habilidades-desarrollador-web.jpg", "id":"imgPerfil"+i}).appendTo("#perfil"+i);
              $("<div></div>", {"class": "descripcion", "id":"descripcionperfil"+i}).appendTo("#perfil"+i);
              $("<h2></h2>",{"class":"nombre", "id":"h2id"+i}).appendTo("#descripcionperfil"+i);
              $("#h2id"+i).text(arrayUsers[i].nombreCompleto);
              $("<p></p>", {"class": "lenguajes", "id":"lenguajeid"+i}).appendTo("#descripcionperfil"+i);
              $("<p></p>", {"class": "description", "id":"descripcionid"+i}).appendTo("#descripcionperfil"+i);
              $("<input></input>", {"class":"verHoja", "id":"verhojaid"+i, "type":"button", "value":"VER HOJA DE VIDA"}).appendTo("#descripcionperfil"+i);
              $("#lenguajeid"+i).html("<b>Lenguajes: </b>"+arrayUsers[i].lenguajes);
              $("#descripcionid"+i).html("<b>Descripción: </b>"+arrayUsers[i].descripcion);
              $("#verhojaid"+i).click(() => {
                window.location.assign("vista/php/HojaDeVida.php?uid="+arrayUsers[i].uid);
              });
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
const cambioContraDialog = document.getElementById("cambioContraDialog");
let olvideContra = document.getElementById("olvideMiContra");

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

olvideContra.onclick = () => {
  cambioContraDialog.setAttribute("style","display: block;");
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
  }
});

let combo1 = document.getElementById("lenguaje");
let combo2 = document.getElementById("tipoProgramador");
let combo3 = document.getElementById("nivelIngles");

combo1.onchange = () =>{
  filtrar();
}

combo2.onchange = () =>{
  filtrar();
}

combo3.onchange = () =>{
  filtrar();
}

obtenerInfoPorFiltros(combo1.value,combo2.value,combo3.value);

function filtrar(){
  $("#contenedorPerfiles").empty();
  obtenerInfoPorFiltros(combo1.value,combo2.value,combo3.value);
}