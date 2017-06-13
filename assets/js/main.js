// JS Nat para validar el formulario de contacto
var botonEnviar = document.getElementById('enviar');
botonEnviar.addEventListener('click', validarContact);

function validarContact() {
    // Obtengo los valores del formulario
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var message = document.getElementById('message');


    // Si los value vienen vacios envio mensaje
    if (name.value === '') {

        name.setAttribute('placeholder', '● Please enter your name');
    }
    if (email.value === '') {
        email.setAttribute('placeholder', '● Please enter your email');
    }
    if (message.value === '') {
        message.setAttribute('placeholder', '● Please enter your message')
    }

    if (name.value !== '' && email.value !== '' && message.value !== '') {
        botonEnviar.setAttribute('type', 'submit');
    }
}