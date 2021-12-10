// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-analytics.js";
import { getDatabase, set, get, onValue, ref, child } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, updatePassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js';
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


let i = 0;

$(document).ready(function() {

    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          if(user.photoURL != null){
            let imgPerfil = document.getElementById("imgPerfil");
            imgPerfil.setAttribute("src",user.photoURL);
          }
          //INSTRUCCIONES
          let iniciarSesionDialog = document.getElementById("inicioSesionDialog");
          iniciarSesionDialog.setAttribute("style","display: none;");
          let btnsInicio = document.getElementById("botones-login");
          btnsInicio.setAttribute("style","display: none");
          let btnPerfil = document.getElementById("labelPerfil");
          btnPerfil.setAttribute("style","display: block");
      
          let opadmministrador = document.getElementById("opAdminID");
          if(user.email == "admin@admin.co"){
            console.log("es el admin");
            opadmministrador.setAttribute("style","display: block");
          }else{
            opadmministrador.setAttribute("style","display: none");
          }
          replaceData(uid);
          $("#guardarCambios").click(() => {
            changeDatabase(uid);
          });
          // ...
        } else {
          // User is signed out
          let btnsInicio = document.getElementById("botones-login");
          btnsInicio.setAttribute("style","display: inline-block;");
          let btnPerfil = document.getElementById("labelPerfil");
          btnPerfil.setAttribute("style","display: none");
          let menuPerfil = document.getElementById("btnperfil");
          menuPerfil.checked = false;
          let imgPerfil = document.getElementById("imgPerfil");
          imgPerfil.setAttribute("src","../img/user-regular-24.png");
          // ...
        }
      });

    $("#infoPersonal").click(function() {
        if(!$("#informacionPersonal").is(":visible")){
            $(".informacion").hide(1000);
            $("#informacionPersonal").show(1000);
        }
    });

    $("#infoContacto").click(function() {
        if(!$("#informacionContacto").is(":visible")){
            $(".informacion").hide(1000);
            $("#informacionContacto").show(1000);
        }
      });

    $("#infoAcademica").click(function() {
        if(!$("#informacionAcademica").is(":visible")){
            $(".informacion").hide(1000);
            $("#informacionAcademica").show(1000);
        }
    });

    $("#agregarRedSocial").click(function () {
        if(i < 3){
            $("#informacionContacto").append($(`<br><select size=1 class="tipoRedSocial">`
                                            +'<option value=1>Red social</option>'
                                            +'<option value=2>Facebook</option>'
                                            +'<option value=3>Twitter</option>'
                                            +'<option value=4>Instagram</option>'
                                            +'</select>'));
            $("#informacionContacto").append($(`<input type="url" class="redSocial">`));
            i++;
        }
    });

    $("#agregarLenguaje").click(()=>{
        $("#informacionAcademica").append($(`<br><select size=1 class="Lenguaje" id="lenguajesSelect">`
                                            +'<option value=1>Lenguaje</option>'
                                            +'<option value=2>PHP</option>'
                                            +'<option value=3>Javascript</option>'
                                            +'<option value=4>Python</option>'
                                            +'</select>'
                                            +`<select size=1 class="nivelProgramacion">`
                                            +'<option value=1>Nivel de programación</option>'
                                            +'<option value=2>Junior</option>'
                                            +'<option value=3>Middle</option>'
                                            +'<option value=4>Senior</option>'
                                            +'</select><textarea class="Especialización"></textarea>'));
    });
});

function replaceData(uid) {
    if(auth != null){
        let data;
        get(child(dbRef, 'datosUsuarios/'+uid)).then((snapshot) => {
            if(snapshot.exists()){
                data = snapshot.val();
                if(auth.currentUser.photoURL != null){
                    $("#imagenPerfil").attr("src", auth.currentUser.photoURL)
                }
                $("#nombrePerfil").text(data.nombreCompleto);

                let nombre_apellido = data.nombreCompleto.split(" ");
                //INFORMACION PERSONAL
                if(nombre_apellido.length == 2){
                    $("#nombres").attr("value", nombre_apellido[0]);
                    $("#apellidos").attr("value", nombre_apellido[1])
                }else{
                    if(nombre_apellido.length == 3){
                        $("#nombres").attr("value", nombre_apellido[0]);
                        $("#apellidos").attr("value", nombre_apellido[1]+" "+nombre_apellido[2]);
                    }else{
                        if(nombre_apellido.length == 4){
                            $("#nombres").attr("value", nombre_apellido[0]+" "+nombre_apellido[1]);
                            $("#apellidos").attr("value", nombre_apellido[2]+" "+nombre_apellido[3]);
                        }
                    }
                }
                $("#fechaNacimiento").attr("value", data.fechaNacimiento);
                $("#tipoDocumento").val(data.tipoDocumentoIdentidad);
                $("#documento").attr("value", data.documentoIdentidad);
                $("#paisResidencia").attr("value", data.paisResidencia);
                $("#ciudadResidencia").attr("value", data.ciudadResidencia);
                $("#direccionResidencia").attr("value", data.residencia);

                //INFORMACION CONTACTO
                $("#celular").attr("value", data.celular);
                $("#telefono").attr("value", data.telefono);
                $("#email").attr("value", data.emailInput);
                $("#contrasena").attr("value", data.contrasena);
                $("#confirmarContrasena").attr("value", data.contrasena);
                //FALTAN REDES SOCIALES

                //INFORMACION ACADEMICA
                $("#tipoProgramador").val(data.nivelProgramacion);
                $("#nivelIngles").val(data.nivelIngles);
                $("#nivelEstudio").val(data.nivelEstudio);
                $("#enlaceRepositorio").attr("value", data.enlaceRepositorio);
            }
        });
    }
}

function changeDatabase(userUid){
    if($("#contrasena").val() == $("#confirmarContrasena").val()){
        set(child(dbRef, 'datosUsuarios/'+userUid),{
            fechaNacimiento: $("#fechaNacimiento").val(),
            tipoDocumentoIdentidad: $("#tipoDocumento").val(),
            documentoIdentidad: $("#documento").val(),
            residencia: $("#direccionResidencia").val(),
            celular: $("#celular").val(),
            telefono: $("#telefono").val(),
            nivelEstudio: $("#nivelEstudio").val(),
            nivelIngles: $("#nivelIngles").val(),
            nivelProgramacion: $("#tipoProgramador").val(),
            uid: userUid,
            nombreCompleto: $("#nombres").val()+" "+$("#apellidos").val(),
            paisResidencia: $("#paisResidencia").val(),
            ciudadResidencia: $("#ciudadResidencia").val(),
            emailInput: $("#email").val(),
            contrasena: $("#contrasena").val(),
            lenguajes: "Lorem ipsum dolor sit amet.",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem fuga quaerat vel. Unde dolores eaque reprehenderit voluptates corrupti at alias."
        }).then(() =>{
            updatePassword(auth.currentUser, $("#contrasena").val()).then(() =>{
                console.log("Password changed");
            }).catch((error) =>{
                console.log(error);
            });
        });
    }
}
