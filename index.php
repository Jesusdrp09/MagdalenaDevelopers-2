<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MagdalenaDevelopers</title>
    <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="vista/css/estilos.css" id="estilos">
    <link rel="stylesheet" href="" id="estilosblanco">
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
                <h5>Aún no tienes cuenta? <a href="vista/php/registro.php">Registrate aquí.</a></h5>
                <hr>
                <h5>Otros métodos de inicio de sesión.</h5>
                <div id="loginGoogle">
                    <img src="vista/img/g-normal.png" id="logoGoogle">
                    <input type="button" value="Sign in with Google" id="signInWithGoogle">
                </div>
            </form>
        </div>
    </div>
    <header>
        <div id="cabecera">
            <div>
                <input type="checkbox" id="btn-menu">
                <label for="btn-menu" id="labelMenu"><div id="contenedorImgPerfil"><img id="imgMenu" src="vista/img/menu_ico.png"></div></label>
                <nav id="menu-navegacion">
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#programadores">Programadores</a></li>
                        <li><a href="#elMundoHoySection">El mundo hoy</a></li>
                        <li><a href="#footer">Contactenos</a></li>
                    </ul>
                </nav>
            </div>
            <div>
                <input type="checkbox" id="btnperfil">
                <label for="btnperfil" id="labelPerfil"><img id="imgPerfil" src="vista/img/user-regular-24.png"></label>
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
        <img src="vista/img/Logo.png" alt="Logo" id="logo">
    </header>
    <main>
        <div id="entrada">
            <h1>MagdalenaDevelopers</h1>
            <h3>"De desarrolladores para desarrolladores"</h3>
        </div>
        <i></i>
        <a href="#programadores" class='bx bx-down-arrow-alt bx-fade-down' id="bajar"></a>
        <div id="programadores">    
            <h1>Programadores</h1>
            
            <SELECT id="selCombo1" SIZE=1 > 
                <OPTION VALUE="1">Años De Experiencia</OPTION>
                <OPTION VALUE="2">1-2 años</OPTION>
                <OPTION VALUE="3">2-5 años</OPTION>
                <OPTION VALUE="4">5 años o mas</OPTION> 
            </SELECT>
    
            <SELECT id="selCombo2" SIZE=1 > 
                <OPTION VALUE="1">Tipo de desarrollo</OPTION>
                <OPTION VALUE="2">Programación estructurada</OPTION>
                <OPTION VALUE="3">Programación orientada a objetos</OPTION>
                <OPTION VALUE="4">Programación modular</OPTION> 
            </SELECT>
                    
            <SELECT id="selCombo3" SIZE=1 > 
                <OPTION VALUE="1">Lenguajes</OPTION>
                <OPTION VALUE="2">Java</OPTION>
                <OPTION VALUE="3">JavaScript</OPTION>
                <OPTION VALUE="4">C#</OPTION> 
            </SELECT>
            <hr>
            <div id="contenedorPerfiles">
                <!-- <div class="perfil">
                    <img src="vista/img/habilidades-desarrollador-web.jpg">
                    <div class="descripcion">
                        <h2 class="nombre">Pepito Gutierrez</h2>
                        <p class="lenguajes"><b>Lenguajes:</b> HTML, CSS y Javascript.</p>
                        <p class="description"><b>Descripcion:</b> Soy estudiante de ingenieria con amplios conocimientos en desarrollo de software y manejo de programación web</p><br>
                    </div>
                </div>
                <div class="perfil">
                    <img src="vista/img/habilidades-desarrollador-web.jpg">
                    <div class="descripcion">
                        <h2 class="nombre">Alfonso Velasquez</h2>
                        <p class="lenguajes"><b>Lenguajes:</b> PHP, Python, .</p>
                        <p class="description"><b>Descripcion:</b> Soy estudiante de ingenieria con amplios conocimientos en desarrollo de software y manejo de programación web</p><br>
                    </div>
                </div>
                <div class="perfil">
                    <img src="vista/img/habilidades-desarrollador-web.jpg">
                    <div class="descripcion">
                        <h2 class="nombre">Jesus Rios</h2>
                        <p class="lenguajes"><b>Lenguajes:</b> Html, css y javascript.</p>
                        <p class="description"><b>Descripcion:</b> Soy estudiante de ingenieria con amplios conocimientos en desarrollo de software y manejo de programación web</p><br>
                    </div>
                </div> -->
            </div>
            <a href="vista/php/perfiles.php"><input type="button" value="Ver Más" class="vermas"></a>
        </div>
        <hr>
        <div id="elMundoHoySection">
            <h1>El Mundo Hoy</h1>
            <h4>Noticias actualizadas para los desarrolladores</h4>
            <br>
            <div id="contenedorNoticias">
                <div class="card">
                    <img src="vista/img/habilidades-desarrollador-web.jpg" width="200px" height="150px">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi deleniti tempore labore ipsam libero error architecto officia ratione, iusto voluptates incidunt minus magnam quibusdam optio enim odio. Nam, optio ipsum.</p>
                    <a href="#"><h5>Saber más...</h5></a>
                </div>
                <div class="card">
                    <img src="vista/img/habilidades-desarrollador-web.jpg" width="200px" height="150px">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi deleniti tempore labore ipsam libero error architecto officia ratione, iusto voluptates incidunt minus magnam quibusdam optio enim odio. Nam, optio ipsum.</p>
                    <a href="#"><h5>Saber más...</h5></a>
                </div>
                <div class="card">
                    <img src="vista/img/habilidades-desarrollador-web.jpg" width="200px" height="150px">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi deleniti tempore labore ipsam libero error architecto officia ratione, iusto voluptates incidunt minus magnam quibusdam optio enim odio. Nam, optio ipsum.</p>
                    <a href="#"><h5>Saber más...</h5></a>
                </div>
                <div class="card">
                    <img src="vista/img/habilidades-desarrollador-web.jpg" width="200px" height="150px">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi deleniti tempore labore ipsam libero error architecto officia ratione, iusto voluptates incidunt minus magnam quibusdam optio enim odio. Nam, optio ipsum.</p>
                    <a href="#"><h5>Saber más...</h5></a>
                </div>
            </div>
            <input type="button" value="Ver Más" class="vermas"> 
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
<script type="module" src="vista/js/codigo.js"></script>
<script type="module" src="vista/js/login.js"></script>
</html>