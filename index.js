/*

let entrada = prompt ("Ingresar tu nombre de usuario")

while (entrada != "ESC") {
    switch (entrada) {
        case "CAMILA123":
            alert ("Bienvenida CAMILA123")
            break
        case "RAMON":
            alert ("Bienvenido RAMON")
            break
        default:
            alert ("Ingreso incorrecto")
            break
}
entrada = prompt("Ingresar tu nombre de usuario")
}

*/


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
