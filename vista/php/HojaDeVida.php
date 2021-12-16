<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formato único persona natural - MagdalenaDevelopers</title>
    <link rel="stylesheet" href="../css/estilospdf.css">
</head>
<body>
    <header>
        <div id="cabecera">
            <div id="titulo">
                <p id="formato">FORMATO ÚNICO</p>
                <h1>HOJA DE VIDA</h1>
                <p id="persona">Persona natural</p>
            </div>
            <div id="entidad-receptora">
                <p>ENTIDAD RECEPTORA</p>
                <input type="text" name="entidadReceptora">
            </div>
        </div>
    </header>
    <main>
        <div id="datos-personales">
            <div id="titulo-datos">
                <div id="numero">1</div><div id="guion">-</div><div id="tituloDatos">HOJA DE VIDA</div>
            </div>
            <div id="informacion-personal">
                <div id="fila-1">
                    <div class="tituloD">
                        APELLIDOS <br>
                        <input type="text" name="apellidos" class="inputT" id="apellidoInput">
                    </div><br>
                    
                    <div class="tituloD">
                        NOMBRES <br>
                        <input type="text" name="nombres" class="inputT" id="nombreInput">
                    </div>
                </div>
                <div id="fila-2">
                    <div id="documentoIDE">
                        <span class="tituloD">DOCUMENTO DE IDENTIFICACIÓN</span><br>
                        <span>C.C</span><input type="radio" name="documento"  class="radio" id="ccinput">
                        <span>C.E</span><input type="radio" name="documento"  class="radio" id="ceinput">
                        <span>T.I</span><input type="radio" name="documento"  class="radio" id="tiinput">
                        <label for="numeroDocumento" class="inputT"  id="numeroDocumento"></label>
                    </div>
                    <div id="fechaNacimiento">
                        <span class="tituloD">FECHA NACIMIENTO</span>
                        <div id="fechaN">
                            <span>DÍA</span><input type="number" id="dia" name="dia" max="31" min="0">
                            <span>MES</span><input type="number" id="mes" name="mes" max="12" min="0">
                            <span>AÑO</span><input type="number" id="anio" name="anio" max="2021" min="0">
                        </div>
                    </div>
                </div>
                <div id="fila-4">
                    <div id="infoAca">
                        <div>
                            <span class="tituloD">INFORMACIÓN ACADÉMICA</span>
                        </div>
                        <div>
                            <span>NIVEL DE ESTUDIO</span><br>
                            <div>
                                <input type="text" name="nivelE" class="inputT" id="nivelEstudio" >
                            </div>
                        </div>
                        <div>
                            <span>NIVEL DE INGLÉS</span><br>
                            <div>
                                <input type="text" name="nivelI" class="inputT" id="nivelIngles">
                            </div>
                        </div>    
                        <div>
                            <span>TIPO DE PROGRAMADOR</span><br>
                            <div>
                                <div>
                                    <input type="text" name="tipoP" class="inputT" id="tipoProgramador">
                                </div>
                            </div>
                        </div>
                        <div>
                            <span id="lenguajes">LENGUAJES</span> <br>
                            <div>
                                <textarea name="lenguajes" class="inputT" id="lenguajesinput"></textarea>
                            </div>
                        </div>
                    </div>
                    <div id="direccionC">
                        <span class="tituloD">DIRECCION DE CORRESPONDENCIA</span><br>
                        <input type="text" name="direccionC" class="inputT" id="inputDireccion"><br><br>
                        <span>PAÍS  <input type="text" name="paisC" class="inputT" id="inputPais"></span><br><br>
                        <span>MUNICIPIO <input type="text" name="municipioC" class="inputT" id="inputMunicipio" ></span><br><br>
                        <span>CELULAR <input type="number" name="celularC" class="inputT" id="inputCelular" ></span><br><br>
                        <span>TELEFONO <input type="number" name="telefonoC" class="inputT" id="inputTelefono" ></span><br><br>
                        <span>EMAIL <input type="email" name="emailC" class="inputT" id="inputEmail" ></span>
                    </div>
                </div>
                <div id="fila-3">
                    <div id="descripcion">
                        <span class="tituloD">DESCRIPCIÓN</span><br>
                        <textarea name="descripción" id="descripcionTA" cols="100"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer id="footer">MagdalenaDevelopers &copy; - Todos los derechos reservados</footer>
</body>
<script src="../js/jquery-3.6.0.min.js"></script>
<script src="../js/html2pdf.bundle.min.js"></script>
<script type="module" src="../js/codigopdf.js"></script>
</html>