// PAGINA WEB DE ALQUILER DE CANCHAS DEPORTIVAS //  


// 1. Saludar al usuario
function saludar() {
    let nombre = prompt("¿Cual es tu nombre?")
    alert("¡Hola!" + " " + nombre)
}

saludar ()



// 2. Verificar que sea mayor de edad
let edad = prompt("Ingresa tu edad")

if(edad>=18){
    alert("Eres mayor de edad")
}else{
    alert("Lo lamento pero no puedes alquilar, no eres mayor de edad")
}



// 3. Selección de la actividad
let seleccionUsuario = parseInt(
    prompt(
        "Que cancha desea alquilar: \n1. Fútbol \n2. Tenis  \n3. Padel \n4. Hockey"
    )
);

switch (seleccionUsuario) {
    case 1:
        alert("Usted selecciono Fútbol");
        break;
    case 2:
        alert("Usted selecciono Tenis");
        break;
    case 3:
        alert("Usted selecciono Padel");
        break;
    case 4:
        alert("Usted selecciono Hockey");
        break;
    default:
        break;
}



// 4. Definiciion del valor

let tiempo = prompt ("Ingrese el tiempo deseado de su reserva")
let personas = prompt ("Ingrese la cantidad de personas que asistiran")

if(tiempo <= 2 && personas <= 5){
    alert("Disponible")
}else{
    alert("No disponible")
}



// 5. Array - Mostrar precios por resreva

const servicios = [{ id: 1, servicio: "Fútbol", precio: 2500},
                   { id: 2, servicio: "Tenis", precio: 1000},
                   { id: 3, servicio: "Paddle", precio: 1500},
                   { id: 4, servicio: "Hockey", precio: 2000}];

for (const servicio of servicios){
console.log (servicio.servicio);
console.log (servicio.precio);

}



// 6. Functions - Fecha deseada de la reserva

const fechaActual = new Date ()
const milisegundosPorDia = 86400000

const dia = parseInt (prompt("Ingresa el dia deseado de tu reserva"))
const mes = parseInt (prompt("Ingresa el mes deseado de tu reserva"))
const anio = parseInt (prompt("Ingresa el anio deseado de tu reserva"))

const reserva = new Date (anio, mes-1, dia )
const diferenciaDias = (reserva - fechaActual) / milisegundosPorDia
//const diferenciaAnios = diferenciaDias / 365

alert (`Reservaste para dentro de  ${Math.round (diferenciaDias)} dias`)
alert (`Reservaste para el dia ${(reserva)}`)





