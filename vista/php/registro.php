<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro</title>
    <link rel="stylesheet" href="../css/estilosregistro.css">
</head>
<body>
    <form name="formularioRegistro" id="formularioRegistro"></form> <!--action="/mi-formulariovs.php"-->
    <div id="registro">
        <h1 id="tituloRegistro">REGISTRO DE USUARIO</h1>
        <div class="informacion" id="informacionPersonal">
            <h1>INFORMACIÓN PERSONAL</h1>
            <label for="nombres">NOMBRES</label>
        <input type="text" form="formularioRegistro" name="nombres" id="nombres" title="Utilizar solamente letras y espacios">
            <label for="apellidos">APELLIDOS</label>
            <input type="text" form="formularioRegistro" name="apellidos" id="apellidos" title="Utilizar solamente letras y espacios">
            <br>
            <label for="fechaNacimiento">FECHA DE NACIMIENTO</label>
            <input type="date" form="formularioRegistro" name="fechaNacimiento" id="fechaNacimiento">
            <select id="tipoDocumento" form="formularioRegistro" name="tipoDocumento" size="1">
                <option VALUE="1">TIPO DE DOCUMENTO</option>
                <option VALUE="2">C.C.</option>
                <option VALUE="3">T.I.</option>
                <option VALUE="4">PASAPORTE</option> 
            </select>
            <input type="number" id="documento" form="formularioRegistro" name="documento">
            <br>
            <label for="Pais de residencia">PAÍS DE RESIDENCIA</label>            
            <input type="text" id="paisResidencia" form="formularioRegistro" name="paisResidencia" pattern="[A-Z]">
            <label for="Ciudad de residencia">CIUDAD DE RESIDENCIA</label>            
            <input type="text" id="ciudadResidencia" form="formularioRegistro" name="ciudadResidencia" pattern="[A-Z]" >
            <label for="Direccion de residencia">DIRECCIÓN DE RESIDENCIA</label>            
            <input type="text" id="direccionResidencia" form="formularioRegistro" name="direccionResidencia" pattern="[A-Z\s\W0-9]">
        </div>
        <div class="informacion" id="informacionContacto">
            <h1>INFORMACIÓN DE CONTACTO</h1>
            <label for="Celular"  >CELULAR</label>
            <input type="number" id="celular" name="celular" form="formularioRegistro" pattern="[0-9]{10}">
            <label for="Telefono">TELÉFONO</label>
            <input type="number" id="telefono" name="telefono" form="formularioRegistro" pattern="[0-9]"><br>
            <label for="Correo electronico">CORREO ELECTRÓNICO</label>
            <input type="email" id="email" name="email" form="formularioRegistro" pattern="[A-Za-z0-9\W]+@+[a-z]+\.+[a-z]{2,3}"><br>
            <label for="Contraseña">CONTRASEÑA</label>
            <input type="password" id="contrasena" name="contrasena" form="formularioRegistro">
            <label for="Confirmar contraseña">CONFIRMAR CONTRASEÑA</label>
            <input type="password" id="confirmarContrasena" name="confirmarContrasena" form="formularioRegistro">
            <label for="red social">AGREGAR RED SOCIAL</label>
            <input type="button" value="+" form="formularioRegistro" id="agregarRedSocial" class="agregar" pattern="[A-Za-z]">
        </div>
        <div class="informacion" id="informacionAcademica">
            <h1>INFORMACIÓN ACADÉMICA</h1>
            <select id="nivelEstudio" form="formularioRegistro" name="nivelEstudio" size="1" class="inputAcademico">
                <option VALUE="1">NIVEL DE ESTUDIO</option>
                <option VALUE="2">BACHILLERATO</option>
                <option VALUE="3">PREGRADO</option>
                <option VALUE="4">POSTGRADO</option>
            </select>
            <select id="nivelIngles" form="formularioRegistro" name="nivelIngles" size="1" class="inputAcademico">
                <option VALUE="1">NIVEL DE INGLÉS</option>
                <option VALUE="2">PRINCIPIANTE</option>
                <option VALUE="3">BÁSICO</option>
                <option VALUE="4">INTERMEDIO</option>
                <option VALUE="5">SUPERIOR</option>
            </select>
            <select id="tipoProgramador" form="formularioRegistro" name="tipoProgramador" size="1" class="inputAcademico">
                <option VALUE="1">TIPO DE PROGRAMADOR</option>
                <option VALUE="2">FRONT-END</option>
                <option VALUE="3">BACK-END</option>
                <option VALUE="4">FULL STACK</option>
            </select>
            <br>
            <label for="enlaceRepositorio" id="labelRepositorio">ENLACE DE REPOSITORIO (OPCIONAL)</label>
            <input type="text" id="enlaceRepositorio" form="formularioRegistro" name="repositorio">
            <br>
            <label for="Agregar lenguaje" id="labelLenguaje">AGREGAR LENGUAJE DE PROGRAMACIÓN</label>
            <input type="button" value="+" onsubmit="volver()" form="formularioRegistro" id="agregarLenguaje" class="agregar">
        </div>
        <input type="button" id="btnRegistrar" value="REGISTRARSE" form="formularioRegistro">
    </div>
</body>
<script type="module" src="../js/codigoRegistro.js"></script>
</html>