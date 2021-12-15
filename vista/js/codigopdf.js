import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-analytics.js";
import { getDatabase, set, get, onValue, ref, child } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-database.js"

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
const database = getDatabase(app);

const dbRef = ref(database);

const $elementoParaConvertir = document.body;

let params = (new URL(document.location)).searchParams;
let uid = params.get('uid');

function putData(){

    let data;
    get(child(dbRef, 'datosUsuarios/'+uid)).then((snapshot) => {
        if(snapshot.exists()){
            data = snapshot.val();
            console.log(data);
            let nombre_apellido = data.nombreCompleto.split(" ");
            //INFORMACION PERSONAL
            if(nombre_apellido.length == 2){
                $("#nombreInput").attr("value", nombre_apellido[0]);
                $("#apellidoInput").attr("value", nombre_apellido[1])
            }else{
                if(nombre_apellido.length == 3){
                    $("#nombreInput").attr("value", nombre_apellido[0]);
                    $("#apellidoInput").attr("value", nombre_apellido[1]+" "+nombre_apellido[2]);
                }else{
                    if(nombre_apellido.length == 4){
                        $("#nombreInput").attr("value", nombre_apellido[0]+" "+nombre_apellido[1]);
                        $("#apellidoInput").attr("value", nombre_apellido[2]+" "+nombre_apellido[3]);
                    }
                }
            }

            let direccionCompleta = data.residencia.split(",");
            $("#inputDireccion").attr("value", direccionCompleta[0]);
            $("#numeroDocumento").attr("value", data.documentoIdentidad);
            $("#inputPais").attr("value", data.paisResidencia);
            $("#inputMunicipio").attr("value", data.ciudadResidencia);
            $("#inputCelular").attr("value", data.celular);
            $("#inputTelefono").attr("value", data.telefono);
            $("#inputEmail").attr("value", data.email);
            $("#lenguajesinput").html(data.lenguajes);
            $("#descripcionTA").html(data.descripcion);

            switch(data.nivelEstudio){
                case "2":
                    $("#nivelEstudio").attr("value", "BACHILLERATO");
                break;
                case "3":
                    $("#nivelEstudio").attr("value", "PREGRADO");
                break;
                case "4":
                    $("#nivelEstudio").attr("value", "POSTGRADO");
                break;
            }

            switch(data.nivelIngles){
                case "2":
                    $("#nivelIngles").attr("value", "PRINCIPIANTE");
                break;
                case "3":
                    $("#nivelIngles").attr("value", "BÁSICO");
                break;
                case "4":
                    $("#nivelIngles").attr("value", "INTERMEDIO");
                break;
                case "5":
                    $("#nivelIngles").attr("value", "SUPERIOR");
                break;
            }

            switch(data.nivelProgramacion){
                case "2":
                    $("#tipoProgramador").attr("value", "FRONT-END");
                break;
                case "3":
                    $("#tipoProgramador").attr("value", "BACK-END");
                break;
                case "4":
                    $("#tipoProgramador").attr("value", "FULL STACK");
                break;
            }

            let fechaNac = data.fechaNacimiento.split("-");
            $("#dia").attr("value", fechaNac[2]);
            $("#mes").attr("value", fechaNac[1]);
            $("#anio").attr("value", fechaNac[0]);

            switch(data.tipoDocumentoIdentidad){
                case "2":
                    $("#ccinput").prop("checked", true);
                break;
                case "3":
                    $("#ceinput").prop("checked", true);
                break;
                case "4":
                    $("#tiinput").prop("checked", true);
                break;
            }

            // html2pdf()
            // .set({
            //     margin: 0,
            //     filename: 'documento.pdf',
            //     image:{
            //         type: 'jpeg',
            //         quality: 0.98
            //     },
            //     html2canvas: {
            //         scale: 3, 
            //         letterRendering: true,
            //     },
            //     jsPDF: {
            //         unit: 'in',
            //         format: 'a3'
            //     }
            // })
            // .from($elementoParaConvertir)
            // .save()
            // .catch(err => console.log(err))
        }
    });

}

putData();
