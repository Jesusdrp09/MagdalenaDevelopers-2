!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perfiles MagdalenaDevelopers</title>
    <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="../css/estilos.css" id="estilos">
    <link rel="stylesheet" href="../css/estilosOpAdmin.css">
    <link rel="stylesheet" href="../css/estilosBuscador.css">
    <link rel="stylesheet" href="" id="estilosblanco">
</head>
<body>
    <div id="cambioContraDialog" style="display: none;">
        <div id="cambioContra">
            <h2>RECUPERAR CONTRASEÑA</h2>
            <hr>
            <div class="campoInicioSesion" id="email">
                <label for="emailInput">Correo electronico:</label>
                <input type="text" id="emailInputCambioContra">
            </div>
            <input type="button" value="Enviar" id="enviarCambioContra">
            <input type="button" value="Cancelar" id="cancelarCambioContra">
        </div>
    </div>
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
            <div>
                <input type="checkbox" id="btn-menu">
                <label for="btn-menu" id="labelMenu"><div id="contenedorImgPerfil"><img id="imgMenu" src="../img/menu_ico.png"></div></label>
                <nav id="menu-navegacion">
                    <ul>
                        <li><a href="../../index.php#">Inicio</a></li>
                        <li><a href="../../index.php#programadores">Programadores</a></li>
                        <li><a href="../../index.php#elMundoHoySection">El mundo hoy</a></li>
                        <li><a href="../../index.php#footer">Contactenos</a></li>
                    </ul>
                </nav>
            </div>
            <div>
                <input type="checkbox" id="btnperfil">
                <label for="btnperfil" id="labelPerfil"><img id="imgPerfil" src="../img/user-regular-24.png"></label>
                <nav id="menu-perfil">
                    <ul>
                        <li><a href="perfil.php">Mi perfil</a></li>
                        <li id="opAdminID" style="display: none;"><a href="opcionesAdmin.php">Opciones Admin</a></li>
                        <li id="cerrarSesion">Cerrar Sesión</li>
                    </ul>
                </nav>
            </div>
            <div id="botones-login" style="display: inline-block;">
                <a href="registro.php"><input type="button" value="Registrarse" id="registrese"></a>
                <input type="button" value="Iniciar sesión" id="iniciar-sesion">
            </div>
        </div>
        <img src="../img/Logo.png" alt="Logo" id="logo">
    </header>
    <main>
        <div id="buscador">
            <input type="text" id="inputNombreABuscar">
            <input type="button" id="btnBuscar" value="Buscar">
        </div>
        <div id="contenedorPerfiles">
            <!-- <div class="datosPerfil" style="display: none;">
                <div class="perfil">
                    <img src="../img/habilidades-desarrollador-web.jpg">
                    <div class="descripcion">
                        <h2 class="nombre">Jesus Rios</h2>
                        <p class="lenguajes"><b>Lenguajes:</b> Html, css y javascript.</p>
                        <p class="description"><b>Descripcion:</b> Soy estudiante de ingenieria con amplios conocimientos en desarrollo de software y manejo de programación web</p><br>
                    </div>
                </div>
                <div class="datosMod">
                    <div class="campoNombreCompleto"><label for="nombreCompletoDB">Nombre completo:<input type="text" value="Jesus Rios" id="nombreCompletoDB"></label></div>
                    <div class="campoLenguajes"><label for="lenguajesDB">Lenguajes:<input type="text" value="Lorem ipsum dolor sit amet." id="lenguajesDB"></label></div>
                    <div class="campoDescripcion"><label for="descripcionDB">Descripción:<input type="text" value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, sequi numquam? Totam rem tempora, ipsam corrupti ad qui modi non!" id="descripcionDB"></label></div>
                    <input class="guardarcambiosbtn" type="button" value="Guardar cambios">
                </div>
            </div> -->
        </div>
    </main>
</body>
<footer id="footer" style="z-index: 1;">
    <div class="contenedor__footer">
        <div class="caja__footer">
            <div class="texto__caja">
                <H2>MagdalenaDevelopers</H2>
                <p>Esta pagina es desarrollada con el fin de ayudar
                    a la poblacion de Desarrolladores / Programadores a
                    conseguir un empleo y puedan seguir demostrando sus
                    habilidades.
                </p>
            </div>
        </div>
        <div class="caja__footer">
            <h2>Desarrolladores</h2>
            <p>Esteban Barraza</p>
            <p>Carlos Gonzalez</p>
            <p>Jesus Rios</p>
            <p>Camilo prieto</p>

        </div>
        <div class="caja__footer">
            <h2>Compañia</h2>
            <a href="#">Acerca de</a>
            <a href="#">Trabajos</a>
            <a href="#">Procesos</a>
            <a href="#">Servicios</a>
        </div>
        <div  class= "caja__footer"  >
            <h2>Redes Sociales</h2>
            <div id="redes">
                <a href="#"><i id="fb" class='bx bxl-facebook'></i></a>
                <a href="#"><i id="tw" class='bx bxl-twitter'></i></a>
                <a href="#"><i id="ig" class='bx bxl-instagram' ></i></a>
                <a href="#"><i id="lk" class='bx bxl-linkedin' ></i></a>
            </div>
        </div>

        <div class="caja__copyright">
            <hr>
            <p>Todos los derechos reservados &COPY; 2021
            <b>MagdalenaDevelopers</b></p>
        </div>

    </div>
</footer>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="../js/jquery-3.6.0.min.js"></script>
<script type="module" src="../js/login.js"></script>
<script type="module" src="../js/perfiles.js"></script>
</html>