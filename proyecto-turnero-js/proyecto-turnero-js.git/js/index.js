// hay un problema con el codigo, ya que no carga el html y css hasta que no realizo la carga de una reserva


// Array para almacenar las reservas
const reservas = [];

// Función para validar el nombre y apellido (solo letras y espacios)
function validarNombreApellido(nombreApellido) {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(nombreApellido);
}

// Función para validar el email
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function tomarDato(mensaje, validarFunc, mensajeError) {
    let dato;
    do {
        dato = prompt(mensaje);
        if (dato && validarFunc(dato)) {
            return dato;
        } else {
            alert(mensajeError);
            console.log(mensajeError);
        }
    } while (true);
}

// Función para tomar los datos de la reserva
function tomarDatosReserva() {
    // Tomar y validar nombre y apellido
    const nombreApellido = tomarDato("Ingrese su nombre y apellido:", validarNombreApellido, "Debe ingresar un nombre y apellido válidos (solo letras y espacios).");

    // Tomar y validar email
    const email = tomarDato("Ingrese su email:", validarEmail, "Debe ingresar un email válido.");

    // NO ENTENDI COMO VALIDAR FECHA Y HORARIO por eso me falta, como puedo hacer para que solo permita realizar reservas en fechas posteriores a la fecha en la que se realiza la carga de datos?
    const fecha = prompt("Ingrese la fecha de la reserva (formato: DD-MM-AAAA):");
    const horario = prompt("Ingrese el horario de la reserva (formato: HH:MM):");

    // Tomar comentarios
    const comentarios = prompt("Ingrese sus comentarios:");

    // Crear un array de reserva
    const reserva = [nombreApellido, email, fecha, horario, comentarios];
    // suma la reserva al array
    reservas.push(reserva);

    // Confirmar la reserva
    const mensajeReserva = "Reserva realizada con éxito:\n" +
        "Nombre y Apellido: " + reserva[0] + "\n" +
        "Email: " + reserva[1] + "\n" +
        "Fecha: " + reserva[2] + "\n" +
        "Horario: " + reserva[3] + "\n" +
        "Comentarios: " + (reserva[4] ? reserva[4] : "Ninguno");

    alert(mensajeReserva);
    console.log(mensajeReserva);
}

// Función para mostrar todas las reservas
function mostrarReservas() {
    if (reservas.length === 0) {
        const mensajeNoReservas = "No hay reservas para mostrar.";
        alert(mensajeNoReservas);
        console.log(mensajeNoReservas);
    } else {
        let mensaje = "Reservas realizadas:\n";
        for (let i = 0; i < reservas.length; i++) {
            const reserva = reservas[i];
            mensaje += (i + 1) + ". " + reserva[0] + " - " +
                reserva[1] + " - " +
                reserva[2] + " - " +
                reserva[3] + " - " +
                (reserva[4] ? reserva[4] : "Ninguno") + "\n";
        }
        alert(mensaje);
        console.log(mensaje);
    }
}

// permite realizar varias reservas - Commo puedo cambiar las opciones del mensaje "¿Desea realizar otra reserva?" para que no sean "OK/CANCEL" sino "SI/NO" ??
let continuar = true;
while (continuar) {
    tomarDatosReserva();
    continuar = confirm("¿Desea realizar otra reserva?");
}

mostrarReservas();