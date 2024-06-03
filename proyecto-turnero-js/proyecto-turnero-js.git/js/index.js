
//verifica que el DOM este cargado correctamnte - esto lo saque de videos tutoriales, no se si es correcto escribirlo aca

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formularioAgenda').addEventListener('submit', function(event) {
        event.preventDefault();

        // array que guarda los datos de los formularios enviados
        var formularios = [];

        // obtiene los valores cargados en el formulario
        var nombreApellido = document.getElementById('nombreApellido').value.trim();
        var correo = document.getElementById('correo').value.trim();
        var mensaje = document.getElementById('mensaje').value.trim();
        var fecha = document.getElementById('fecha-datepicker').value.trim();
        var hora = document.getElementById('hora').value.trim();

        
        // valida los campos del formulario antes de enviar
        var camposIncorrectos = [];
        if (!nombreApellido) {
            camposIncorrectos.push('Nombre y Apellido');
        }
        if (!correo || !validateEmail(correo)) {
            camposIncorrectos.push('Correo');
        }
        if (!mensaje) {
            camposIncorrectos.push('Mensaje');
        }
        if (!fecha) {
            camposIncorrectos.push('Fecha');
        }
        if (!hora) {
            camposIncorrectos.push('Hora');
        }

        // mensaje de alerta si algun campos no se completo o se completo incorrectamente
        if (camposIncorrectos.length > 0) {
            var mensajeAlerta = 'Por favor, complete los siguientes campos de manera correcta:\n';
            camposIncorrectos.forEach(function(campo) {
                mensajeAlerta += '- ' + campo + '\n';
            });
            alert(mensajeAlerta);
            return;
        }

        // muestra en consola los datos enviados
        console.log('Nombre y Apellido:', nombreApellido);
        console.log('Correo:', correo);
        console.log('Mensaje:', mensaje);
        console.log('Fecha:', fecha);
        console.log('Hora:', hora)

        // confirma el envio de los datos
        alert('La informacion fue enviada exitosamente, te confirmaremos la reserva a la brevedad');
    });

    // toma los datos cargados en el formulario y los agrega a array formularios -- tengo un error "Uncaught ReferenceError: fecha is not defined
    // at HTMLDocument.<anonymous> (index.js:63:16)"--- no se como resolverlo
    var formData = {
        nombreApellido: nombreApellido,
        correo: correo,
        mensaje: mensaje,
        fecha: fecha,
        hora: hora
    };

    formularios.push(formData);

    console.log('Formulario enviado:', formData);
    console.log('Todos los formularios enviados:', formularios);

    // esto valida que el formato del email sea el correcto - tiene un error - verificar
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }
});
