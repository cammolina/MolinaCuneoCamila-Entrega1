
// 1. Cambios guardados

/*
Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Tu pedido ha sido enviado',
    showConfirmButton: false,
    timer: 1500
  })
  */


  // 2. Countdown

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]

  const giveaway = document.querySelector(".giveaway")
  const deadline = document.querySelector (".deadline")
  const items = document.querySelectorAll (".deadline-format h4")

  let tempDate = new Date ()
  let tempYear = tempDate.getFullYear()
  let tempMonth = tempDate.getMonth()
  let tempDay = tempDate.getDate()

  //let futureDate = new Date (2022,8, 11, 11, 30, 0);
  const futureDate = new Date (tempYear, tempMonth, tempDay + 10, 11, 30, 0 )
  const year = futureDate.getFullYear()
  const hours = futureDate.getHours()
  const minutes = futureDate.getMinutes()

  let month = futureDate.getMonth();
  month = months[month]

  const date = futureDate.getDate ();

  const weekday = weekdays [futureDate.getDay()];


  giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}: ${minutes}am`;


  // future time in ms

  const futureTime = futureDate.getTime()


  function getRemainingTime(){
    const today = new Date().getTime();
    const t = futureTime - today;
    
    // 1s = 1000ms
    // 1m = 60s
    // 1 hr = 60min
    // 1d = 24hs

    // values in ms
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;
    

    // calculate all values 
    let days = t / oneDay
    days = Math.floor(days)
    let hours = Math.floor ((t % oneDay) / oneHour)
    let minutes = Math.floor ((t % oneHour) / oneMinute)
    let seconds = Math.floor ((t % oneMinute) / 1000)

    // set values array
    const values = [days,hours,minutes, seconds];

    function format (item){
        if (item < 10){
            return item = `0${item}`
        }
        return item
        }

    items.forEach (function (item,index){
        item.innerHTML = values[index]
    })

    if(t<0){
        clearInterval(countdown)
        deadline.innerHTML = `<h4 class="expired"> Sorry, this launch has ran out of stock </h4>`
    }
  }

  // countdown
  let countdown = setInterval (getRemainingTime, 1000)


  getRemainingTime()




// 2. JSON & STORAGE


localStorage.setItem("nombre", "Camila")
localStorage.setItem("edad", "29")
localStorage.setItem("correo", "camila@gmail.com")
localStorage.setItem("size", "7")


let nombre = localStorage.getItem("nombre")
let edad = localStorage.getItem("edad")
let correo = localStorage.getItem("correo")
let size = localStorage.getItem("size")

console.log("Nombre:" + nombre)
console.log("Edad:" + edad)
console.log("Correo:" + correo)
console.log("Size:" + size)


// 3. SWEAT ALERT

const btnMostrarAlert = document.getElementById ("btn-mostrar-alert");
btnMostrarAlert.onclick = mostrarAlert;

function mostrarAlert () {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your request has been saved',
        showConfirmButton: false,
        timer: 1000
      })
    }


// 4. FETCH

function registrarProducto (producto) {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments", {
        method: "POST",
        body: JSON.stringify(producto),
        headers: {
            "Content-type": "application/json"
        }
    })
    .then((response) => response.json())
    .then ((data) => console.log(data))
}


const productoARegistrar = {
    "nombre": "Zapatilla",
    "cantidad": 1,
    "precioVenta": "44000",
    "precioCompra": "44000",
    "fecha": "2022-08-04T06:08:01.498Z",
}


registrarProducto(productoARegistrar)
