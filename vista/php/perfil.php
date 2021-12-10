<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perfil</title>
    <link rel="stylesheet" href="../css/estilos.css">
    <link rel="stylesheet" href="../css/estilosPerfil.css">
</head>
<body>
    <div id="inicioSesionDialog" style="display: none;">
        <div id="iniciarSesion">
            <form action="https://practica-228ed-default-rtdb.firebaseio.com/usuariosRegistrado.json" method="GET" target="_blank" id="formIniciarSesion"></form>
                <h2>INICIAR SESIÓN</h2>
                <hr>
                <input type="text" value='"email"' name="orderBy" style="display: none;">
                <div class="campoInicioSesion" id="email">
                    <label for="emailInput">Correo electronico:</label>
                    <input type="text" id="emailInput" name="equalTo">
                </div>
                <div class="campoInicioSesion" id="pass">
                    <label for="passwordInput">Contraseña:</label>
                    <input type="password" id="passwordInput" name="pass">
                </div>
                <!-- <div id="noCerrarSesionDiv">
                    <label for="noCerrarSesion">No cerrar sesión </label><input type="checkbox" value="No cerrar sesión" id="noCerrarSesion">
                </div> -->
                <input type="button" value="Ingresar" id="ingresarIS">
                <h5>Aún no tienes cuenta? <a href="registro.php">Registrate aquí.</a></h5>
                <hr>
                <h5>Otros métodos de inicio de sesión.</h5>
                <div id="loginGoogle">
                    <img src="../img/g-normal.png" id="logoGoogle">
                    <input type="button" value="Sign in with Google" id="signInWithGoogle">
                </div>
            </form>
        </div>
    </div>
    <header>
        <div id="cabecera">
            <h1><a href="../../index.php" id="irWeb">IR A LA WEB</a></h1>
            <div>
                <input type="checkbox" id="btnperfil">
                <label for="btnperfil" id="labelPerfil"><img id="imgPerfil" src="../img/user-regular-24.png"></label>
                <nav id="menu-perfil">
                    <ul>
                        <li><a href="vista/php/perfil.php">Mi perfil</a></li>
                        <li id="opAdminID" style="display: none;"><a href="vista/php/opcionesAdmin.php">Opciones Admin</a></li>
                        <li id="cerrarSesion">Cerrar Sesión</li>
                    </ul>
                </nav>
            </div>
            <div id="botones-login" style="display: inline-block;">
                <a href="vista/php/registro.php"><input type="button" value="Registrarse" id="registrese"></a>
                <input type="button" value="Iniciar sesión" id="iniciar-sesion">
            </div>
        </div>
        <img src="../img/Logo.png" alt="Logo" id="logo">    
    </header>
    <main>
        <div id="perfil">
            <img src="../img/user-regular-24.png" id="imagenPerfil" alt="imgPerfil">
            <h1 id="nombrePerfil">Nombre</h1>
            <button id="infoPersonal">Información personal</button>
            <button id="infoContacto">Información de contacto</button>
            <button id="infoAcademica">Información academica</button>
        </div>
        <div id="informacionPersonal" class="informacion">
            <h2 class="tituloInfo">Información Personal</h2>
            <label for="nombres">NOMBRES: </label>
            <input type="text" id="nombres">
            <label for="apellidos">APELLIDOS: </label>
            <input type="text" id="apellidos"><br>
            <label for="fechaNacimiento">FECHA DE NACIMIENTO: </label>
            <input type="date" id="fechaNacimiento">
            <select name="tipoDocumento" size="1" id="tipoDocumento">
                <option VALUE="1">TIPO DE DOCUMENTO</option>
                <option VALUE="2">C.C.</option>
                <option VALUE="3">T.I.</option>
                <option VALUE="4">PASAPORTE</option> 
            </select>
            <input type="number" id="documento"><br>
            <label for="paisResidencia">PAÍS DE RESIDENCIA: </label>
            <input type="text" id="paisResidencia">
            <label for="ciudadResidencia">CIUDAD DE RESIDENCIA: </label>
            <input type="text" id="ciudadResidencia">
            <label for="dirResidencia">DIRECCIÓN DE RESIDENCIA: </label>
            <input type="text" id="direccionResidencia">
        </div>
        <div id="informacionContacto" class="informacion">
            <h2 class="tituloInfo">Información Contacto</h2>
            <label for="Celular">CELULAR</label>
            <input type="number" id="celular" pattern="[0-9]{10}">
            <label for="Telefono">TELÉFONO</label>
            <input type="number" id="telefono" pattern="[0-9]">
            <label for="Correo electronico">CORREO ELECTRÓNICO</label>
            <input type="text" id="email" pattern="[A-Za-z0-9\W]+@+[a-z]+\.+[a-z]{2,3}"><br>
            <label for="Contraseña">CONTRASEÑA</label>
            <input type="password" id="contrasena">
            <label for="Confirmar contraseña">CONFIRMAR CONTRASEÑA</label>
            <input type="password" id="confirmarContrasena"><br>
            <label for="red social">AGREGAR RED SOCIAL</label>
            <input type="button" value="+" id="agregarRedSocial" class="agregar" pattern="[A-Za-z]">
        </div>
        <div id="informacionAcademica" class="informacion">
            <h2 class="tituloInfo">Información Académica</h2>
            <select id="nivelEstudio"  name="nivelEstudio" size="1" class="inputAcademico">
                <option VALUE="1">NIVEL DE ESTUDIO</option>
                <option VALUE="2">BACHILLERATO</option>
                <option VALUE="3">PREGRADO</option>
                <option VALUE="4">POSTGRADO</option>
            </select>
            <select id="nivelIngles" name="nivelIngles" size="1" class="inputAcademico">
                <option VALUE="1">NIVEL DE INGLÉS</option>
                <option VALUE="2">PRINCIPIANTE</option>
                <option VALUE="3">BÁSICO</option>
                <option VALUE="4">INTERMEDIO</option>
                <option VALUE="5">SUPERIOR</option>
            </select>
            <select id="tipoProgramador" name="tipoProgramador" size="1" class="inputAcademico">
                <option VALUE="1">TIPO DE PROGRAMADOR</option>
                <option VALUE="2">FRONT-END</option>
                <option VALUE="3">BACK-END</option>
                <option VALUE="4">FULL STACK</option>
            </select>
            <br>
            <label for="enlaceRepositorio" id="labelRepositorio">ENLACE DE REPOSITORIO (OPCIONAL)</label>
            <input type="text" id="enlaceRepositorio" name="repositorio">
            <br>
            <label for="Agregar lenguaje" id="labelLenguaje">AGREGAR LENGUAJE DE PROGRAMACIÓN</label>
            <input type="button" value="+" onsubmit="volver()" id="agregarLenguaje" class="agregar">
        </div>
    </main>
    <button id="guardarCambios">Guardar cambios</button>
</body>
<script src="../js/jquery-3.6.0.min.js"></script>
<!-- <script src="../js/codigo.js"></script> -->
<script type="module" src="../js/login.js"></script>
<script type="module" src="../js/codigoPerfil.js"></script>
</html>