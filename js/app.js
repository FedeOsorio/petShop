// Interacción con Usuario

/*alert("Bienvenido a Servicios Osito, Internet/Televisión/Telefonía")
let eleccionUsuario = prompt("¿Qué servicio desea contratar? \n 1 - Internet \n 2 - TV \n 3 - Teléfonia \n 4 - Internet+TV \n 5 - Salir")
eleccionUsuario = Number(eleccionUsuario)
while (eleccionUsuario != 1 && eleccionUsuario != 2 && eleccionUsuario != 3 && eleccionUsuario != 4 && eleccionUsuario != 5) {
    alert("El número ingresado es incorrecto");
    let eleccionUsuario2 = prompt("Ingrese una de las opciones en pantalla: \n 1 - Internet \n 2 - TV \n 3 - Teléfonia \n 4 - Internet + TV \n 5 - Salir");
    eleccionUsuario2 = Number(eleccionUsuario2);
    eleccionUsuario = eleccionUsuario2; 
}
let servicioElegido
servicioElegido = Number(servicioElegido)
let primerPaquete 
let suma
let servicioAdicional
*/

// PAQUETES ADICIONALES 
const segundoPaquete = {servicio: 'Internet', velocidad: 50, precio: 1290}
const tercerPaquete = {servicio: 'Telefonía', precio: 450}

// SERVICIOS Y PRECIOS
const paquetesInternet = [{servicio: 'Internet', capacidad: "50", precio: 1490}, {servicio: 'Internet', capacidad: 100, precio: 1800}]
const paquetesTv = [{servicio: 'TV', capacidad: 'Básico', canales: 85, precio: 1400}, {servicio: 'TV', capacidad: 'HD', canales: 190, precio: 2500}]

// FUNCIONES PARA SUMAR SERVICIOS
function sumarTel(primerPaquete, tercerPaquete, suma) {
  suma = primerPaquete+tercerPaquete   
  alert('Excelente, el costo total de su servicio es de $'+suma+' mensuales')
  alert('¡Gracias por elegirnos! ¡Hasta luego!')
}

function noSumar(primerPaquete, suma){
    suma = primerPaquete
    alert('El costo total de su servicio es de $'+suma+' mensuales')
    alert('¡Gracias por elegirnos! ¡Hasta luego!')
}

function sumarTv(primerPaquete, segundoPaquete, suma){
    suma = primerPaquete+segundoPaquete
    alert('Excelente, el costo total de su servicio es de $'+suma+' mensuales')
    alert('¡Gracias por elegirnos! ¡Hasta luego!')
}

// FILTRADO
//const mapInternet = paquetesInternet.map((paquetesInternet) => paquetesInternet) 
//console.log(mapInternet)

//const mapTv = paquetesTv.map((paquetesTv) => paquetesTv) 
//console.log(mapTv)

// INTERACCIÓN CON HTML
// CONSTRUCTOR
class Servicio {
    constructor(servicio, capacidad, imgSrc, precio) {
        this.servicio = servicio
        this.capacidad = capacidad
        this.imgSrc = imgSrc
        this.precio = precio
    }
}

// DECLARACION DE SERVICIOS
const servicioInternet1 = new Servicio('Internet', '50 MEGAS', 'https://www.iparatodos.com.ar/uploads/baners/8e949dff78bc00d38cadbbfb94c3d95b1373b866.png', paquetesInternet[0].precio)
const servicioInternet2 = new Servicio('Internet', '100 MEGAS', 'https://www.telered.com.ar/img/bannersprod/100megas-nuevo730.jpg', paquetesInternet[1].precio)
const servicioTv1 = new Servicio('TV', 'Básico - 85 canales', 'https://www.telered.com.ar/img/bannersprod/bannerhd-20220427.jpg', paquetesTv[0].precio)
const servicioTv2 = new Servicio('TV', 'HD - 190 canales','https://www.telered.com.ar/img/bannersprod/bannerhd-20220427.jpg', paquetesTv[1].precio)
const servicioTel = new Servicio('Telefonía', '-','linea.png', 450)

let productos = []

const cardContainerQuery = document.querySelector('#cardContainer')

// DOM
const renderizarLista = (array) => {
    cardContainerQuery.innerHTML = ''
    array.forEach((producto) => {
        const productoDiv = document.createElement('div')
        productoDiv.setAttribute('data-id', producto.capacidad)
        productoDiv.innerHTML = `
        <div class="cardBox">
        <h3 class="cardTitle"> Servicio de ${producto.servicio} </h3>
        <img src="${producto.imgSrc}" class="cardImg">
        <p class="cardDesc"> ${producto.capacidad}</p>
        <span class="cardPrice"> $${producto.precio} </span>
        <button class="agregarCarrito" data-id=${producto.servicio+producto.capacidad}> ¡Lo quiero! </button>
        </div>
        `
        productoDiv.className = 'card'
        cardContainerQuery.append(productoDiv)
    })

    document.querySelectorAll('.agregarCarrito').forEach((button) => {
        button.addEventListener('click', guardarEvento)
    })

}

// FETCH
const getAllProducts = async () => {
    const response = await fetch('js/productos.json')
    const data = await response.json()
    productos = data
    renderizarLista(productos)
}
getAllProducts()

// VARIABLES PARA EL CARRITO
let carrito = []
let productoCarritoString = 'Carrito Vacio' 

if(localStorage.getItem('carrito')) {
    carrito = JSON.parse(localStorage.getItem('carrito'))
    productoCarritoString = carrito
} else {
    carrito = []
    productoCarritoString = 'Carrito vacio..' 
}

// FUNCIONAMIENTO DEL CARRITO
const botonesAgregarCarrito = document.querySelectorAll('.agregarCarrito')
   
console.log(productoCarritoString);

const carritoDesc = document.querySelector('.carritoDesc')
const textoCarrito = carritoDesc.innerHTML
carritoDesc.textContent = productoCarritoString
console.log(textoCarrito)

// DESESTRUCTURACIÓN DE ARRAY
const servInternet = paquetesInternet[0].servicio
// const internet2 = paquetesInternet[1].servicio
const velocidad50 = paquetesInternet[0].capacidad
const velocidad100 = paquetesInternet[1].capacidad
// PARA TV
const servTv = paquetesTv[0].servicio
//const tvHD = paquetesTv[1].servicio
const defBasica = paquetesTv[0].capacidad
const defHD = paquetesTv[1].capacidad

const guardarEvento = (click) => {
    const productoArray = click.target.getAttribute('data-id')
//    console.log(productoArray);

// CONDICIONALES PARA GUARDAR CARRITO    
        if (productoArray == servInternet+velocidad50){
           productoCarritoString = 'Internet 50 MEGAS'
        }
        else if (productoArray == servInternet+velocidad100) {
            productoCarritoString = 'Internet 100 MEGAS'
        }
        else if (productoArray == servTv+defBasica) {
            productoCarritoString = 'TV Básico'
        }
        else if (productoArray == servTv+defHD) {
            productoCarritoString = 'TV HD'
        }
        else if (productoArray == tercerPaquete.servicio+"-"){
            productoCarritoString = 'Telefonía'
        }
    carrito.push(productoCarritoString)
    toastr["success"](productoCarritoString, "Agregaste: ")
    //alertify.notify('Agregaste: '+productoCarritoString)
    console.log(carrito)

carritoDesc.textContent = carrito

 // GUARDO EL CARRITO EN EL LOCAL STORAGE
 localStorage.setItem('carrito', JSON.stringify(carrito))
}

// EJECUCIÓN DE guardarEvento AL HACER CLICK
botonesAgregarCarrito.forEach((boton) => {
boton.addEventListener('click', guardarEvento)
})

// Boton Vaciar Carrito
const botonVaciarCarrito = document.querySelector('.botonVaciarCarrito')

const vaciarCarrito = () => {
    localStorage.clear()
    carrito = []
    carritoDesc.textContent = 'Carrito vacio..'
    toastr["warning"]('Vaciaste el carrito')
}
botonVaciarCarrito.addEventListener('click', vaciarCarrito)

// Boton Finalizar Compra
const botonFinalizarCompra = document.querySelector('.botonFinalizarCompra')

const finalizarCompra = () => {
    Swal.fire({
        title: '¿Desea finalizar su compra?',
        text: "Va a adquirir "+carritoDesc.textContent,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Sí!',
        cancelButtonText: 'Volver atrás'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            '¡Compra realizada!',
            'Su pago ha sido procesado.',
            'success'
          )
        }
      })    
}
botonFinalizarCompra.addEventListener('click', finalizarCompra)



/*
const medioDePago = document.querySelector('#pago')
    medioDePago.addEventListener('input', () => {
    console.log(medioDePago.value);
    const inputValido = medioDePago.value.includes("debito") || medioDePago.value.includes("credito")
    console.log(inputValido);
    if (inputValido == true){
    console.log("Eligió "+medioDePago.value)
// alert("Eligió "+medioDePago.value)
    }
})
*/