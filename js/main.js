const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form .form-control');
const inputNombre = document.getElementsByName('nombre');
const inputMail = document.getElementsByName('mail');
const inputMensaje = document.getElementsByName('mensaje');

const aviso = document.querySelector('.aviso');

const validFeedback = document.querySelectorAll('.valid-feedback');
const invalidFeedback = document.querySelectorAll('.invalid-feedback');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //Correo
    mensaje: /^[aA-z ¿?¡!.,ñ_-]+$/, //Letras y símbolos
}

const campos = {
	nombre: false,
	mail: false,
	mensaje: false,
};

const validarFormulario = (e) => {
	switch (e.target.name) {
		case 'nombre': 
			validarCampo(expresiones.nombre, e.target, 'nombre');
            if(campos.nombre) {
                validFeedback[0].style.display = "inline-block";
                invalidFeedback[0].style.display = "none";
            } else {
                invalidFeedback[0].style.display = "inline-block";
                validFeedback[0].style.display = "none";
            }
			break;
		case 'mail': 
			validarCampo(expresiones.mail, e.target, 'mail');
            if(campos.mail) {
                validFeedback[1].style.display = "inline-block";
                invalidFeedback[1].style.display = "none";
            } else {
                invalidFeedback[1].style.display = "inline-block";
                validFeedback[1].style.display = "none";
            }
			break;
		case 'mensaje': 
			validarCampo(expresiones.mensaje, e.target, 'mensaje');
            if(campos.mensaje) {
                validFeedback[2].style.display = "inline-block";
                invalidFeedback[2].style.display = "none";
            } else {
                invalidFeedback[2].style.display = "inline-block";
                validFeedback[2].style.display = "none";
            }
			break;
		default:
			break;
	}
    
};

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(campos.nombre && campos.mail && campos.mensaje) {
        emailjs.send('service_drwo6z8', 'contact_form', {
            mensaje: inputMensaje[0].value,
            nombre: inputNombre[0].value,
            mail: inputMail[0].value,
        })
        .then(function() {
            console.log('SUCCESS!');
        }, function(error) {
            console.log('FAILED...', error);
        });
		form.reset();
        aviso.innerHTML = "Mensaje enviado exitosamente! Me pondré en contacto a la brevedad.";
        aviso.style.color = "green";
        window.location.href = "../redirect.html"
	} else {
        aviso.innerHTML = "Ha ocurrido un error. Por favor revisa los datos.";
        aviso.style.color = "red";
	}
})

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)) {
		campos[campo] = true;
	} else {
		campos[campo] = false;
	}
}