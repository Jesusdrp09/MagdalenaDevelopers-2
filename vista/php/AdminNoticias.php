<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/estilos.css">
    <link rel="stylesheet" href="../css/AdminNoticias.css">
    <title>Administrador Noticias</title>
</head>
<body>
    <div id=" Adminitrador de noticias" class="NoticiasInfo">
        <h2 class="tituloInfo">Centro De Noticias</h2>
        <label for="Subir Imagen">Subir Imagen Noticia</label>
        <input type="file" name="SubirImagen" id="imgInput">
        <label for="Titulo Noticia">Titulo Noticia</label>
        <input type="text" id="Titulo" ><br>
        <label for="Descripcion Noticia">Descripcion Noticia:</label><br>
        <textarea name="textarea" placeholder="Noticia..." rows="2" cols="80" id="descripcionNoticia"></textarea><br><br>
        <label for="URL Noticia">URL Noticia</label>
        <input type="url" id="url" name="url">
        <br>
        
    </div>
    <button id="guardarCambios">Guardar cambios</button>
    <input type="button" id="btnVolver" value="VOLVER">
</body>
<script src="../js/jquery-3.6.0.min.js"></script>
<script src="../js/adminNoticias.js"></script>
<script type="module" src="../js/loadPicture.js"></script>
</html>