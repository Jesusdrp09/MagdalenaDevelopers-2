
const $elementoParaConvertir = document.body;


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
