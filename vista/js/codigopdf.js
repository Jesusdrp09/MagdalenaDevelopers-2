import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-analytics.js";
import { getDatabase, set, get, onValue, ref, child } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-database.js"

const $elementoParaConvertir = document.body;

let params = (new URL(document.location)).searchParams;
let uid = params.get('uid');

function putData(){

    html2pdf()
    .set({
        margin: 0,
        filename: 'documento.pdf',
        image:{
            type: 'jpeg',
            quality: 0.98
        },
        html2canvas: {
            scale: 3, 
            letterRendering: true,
        },
        jsPDF: {
            unit: 'in',
            format: 'a3'
        }
    })
    .from($elementoParaConvertir)
    .save()
    .catch(err => console.log(err))
}
