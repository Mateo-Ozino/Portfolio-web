<?php
$destino= "mateo.ozino.webdev@gmail.com";
$nombre =  $_POST["nombre"];
$mail =  $_POST["mail"];
$mensaje =  $_POST["mensaje"];

$mailHeader = "From:".$nombre."<".$mail.">\r\n";

mail($destino, "Contacto desde formulario de portfolio", $mensaje, $mailHeader) or die("Error al enviar el mensaje");
echo '
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- BOOTSTRAP -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <!-- CSS PROPIO -->
    <link rel="stylesheet" href="../css/style.css">
    <title>Contacto</title>
</head>
<body>
    <div class="envioForm">
        <h1>Gracias por contactarme!</h1>
        <p>En breve me pondré en contacto contigo.</p>
        <button class="btn botonEnvio"><a href="../index.html">Volver al inicio</a></button>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy" crossorigin="anonymous"></script>
</body>
</html>
';
?>