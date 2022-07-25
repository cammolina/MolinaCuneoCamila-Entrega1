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


/*
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

const servicios = [{ id: 1, servicio: "Fútbol", precio: 2500, cantidad: 1},
                   { id: 2, servicio: "Tenis", precio: 1000, candidad: 2},
                   { id: 3, servicio: "Paddle", precio: 1500, cantidad: 2},
                   { id: 4, servicio: "Hockey", precio: 2000, cantidad: 1}];

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


let body = document.getElementById ("body1")
let h2 = document.getElementById ("titulo")
let parrafo = document.getElementById ("subtitulo")

console.log(body1.innerHTML);
console.log(titulo.innerHTML);
console.log(subtitulo.innerHTML);


*/

// 7. Incluyendo DOM

const listaProductos = [
    {
        id: 1,
        nombre: "Pelota",
        precioVenta: "1500",
        cantidad: 4,
    },
    {
        id: 2,
        nombre: "Raqueta",
        precioVenta: "5000",
        cantidad: 2,
    },
    {
        id: 3,
        nombre: "Paleta",
        precioVenta: "8000",
        cantidad: 1,
    },
    {
        id: 4,
        nombre: "Bocha",
        precioVenta: "900",
        cantidad: 3,
    }
];

let contenedorProductos = document.getElementById("contenedor-productos")

for(const producto of listaProductos){
    let columna = document.createElement("div")
    columna.className = "col-md-4 mt-3"
    columna.id = `columna-${producto.id}`
    columna.innerHTML = `
        <div class="card">
            <div class="card-body">
                <p class="card-text"> Nombre: 
                    <b>${producto.nombre}</b>
                <p/>
               
                <p class="card-text"> Precio Venta: 
                    <b>${producto.precioVenta}</b>
                <p/>
                <p class="card-text"> Cantidad: 
                    <b>${producto.cantidad}</b>
                <p/>
            </div>
        </div>
    `

    contenedorProductos.append(columna)
}


let columnaBorrar = document.getElementById ("columna-1")

columnaBorrar.remove



function sumarCuotas(cuotaUno, cuotaDos, cuotaTres, cuotaCuatro) {
    let suma = (cuotaUno + cuotaDos + cuotaTres + cuotaCuatro)*1.3
    alert("La suma de sus compra es "+ suma)
}

let cuotaUno = parseInt(prompt("Ingrese el precio de su primer producto para calcular el total a abonar (*a cada cuota se le adiciona un 3% de interés) - PRECIOS: Pelota ($1500), Raqueta ($5000), Paleta ($8000), Bocha ($900)"))
let cuotaDos = parseInt(prompt("Ingrese el precio de su segundo producto para calcular el total a abonar"))
let cuotaTres = parseInt(prompt("Ingrese el precio de su tercer producto para calcular el total a abonar"))
let cuotaCuatro = parseInt(prompt("Ingrese el precio de su cuarto producto para calcular el total a abonar"))

sumarCuotas(cuotaUno, cuotaDos, cuotaTres, cuotaCuatro)



const productos = [
    {nombre: 'Pelota', precio: 1500},
    {nombre: 'Raqueta', precio: 5000},
    {nombre: 'Paleta', precio: 8000},
    {nombre: 'Bocha', precio: 900},
]

const resultado = productos.find((producto) => producto.nombre === "Pelota")


const resultadDos = productos.find((producto) => producto.nombre === "Raqueta")

const resultadTres = productos.find((producto) => producto.nombre === "Paleta")

const resultadoCuatro = productos.find((producto) => producto.nombre === "Bocha")


console.log(resultado)
console.log(resultadDos)
console.log(resultadTres)
console.log(resultadoCuatro)




// 8. EVENTOS
let formulario = document.getElementById ("formulario")
let inputNombre = document.getElementById ("inputNombreProducto")
let inputPrecioCompra = document.getElementById ("inputPrecioCompra")
let inputDirrecionEntrega = document.getElementById ("inputDirrecionEntrega")
let inputTelefono = document.getElementById ("inputTelefono")

let pedidos = []

class Pedidos{
    constructor(nombre, precioCompra, dirrecionEntrega, telefono){
        this.nombre = nombre.toUpperCase ()
        this.precioCompra = precioCompra
        this.dirrecionEntrega = dirrecionEntrega
        this.telefono = telefono
    }
}


formulario.onsubmit = (event) => validarFormulario (event)

function validarFormulario (event) {
    event.preventDefault ()
    console.log (event.target)
    console.log(inputNombre.value)
    console.log(inputPrecioCompra.value)
    console.log(inputDirrecionEntrega.value)
    console.log(inputTelefono.value)

}



// 9. JSON & STORAGE


localStorage.setItem("nombre", "Camila")
localStorage.setItem("edad", "29")
localStorage.setItem("correo", "camila@gmail.com")


let nombre = localStorage.getItem("nombre")
let edad1 = localStorage.getItem("edad")
let correo = localStorage.getItem("correo")

console.log("Nombre:" + nombre)
console.log("Edad:" + edad)
console.log("Correo:" + correo)



// 10. LIBRERIAS

const btnMostrarAlert = document.getElementById ("btn-mostrar-alert");
btnMostrarAlert.onclick = mostrarAlert;

function mostrarAlert () {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Tu pedido ha sido guardado',
        showConfirmButton: false,
        timer: 1500
      })
    }
