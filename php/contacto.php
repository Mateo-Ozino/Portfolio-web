<?php
$destino= "mateo.ozino.webdev@gmail.com";
$nombre =  $_POST["nombre"];
$mail =  $_POST["mail"];
$mensaje =  $_POST["mensaje"];

$mailHeader = "From:".$nombre."<".$mail.">\r\n";

if ($_POST['submit']) {
    if (mail($destino, "Contacto desde formulario de portfolio", $mensaje, $mailHeader)) {
    echo 'El mensaje se ha enviado';
    } else {
    echo 'Falló el envio';
    }
}
?>