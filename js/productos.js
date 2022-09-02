// DOM
// INTERACCIÓN CON HTML
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
        <h3 class="cardTitle"> ${producto.titulo} </h3>
        <img src="${producto.img}" class="cardImg">
        <p class="cardDesc"> ${producto.tipo + ' ' + producto.nombre + ' ' + producto.marca}</p>
        <span class="cardPrice"> $${producto.precio} </span>
        <button class="agregarCarrito" data-id=${producto.nombre}> ¡Lo quiero! </button>
        <div>
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
    const response = await fetch('js/data/productos.json')
    const data = await response.json()
    productos = data
    renderizarLista(productos)
}
getAllProducts()

// VARIABLES PARA EL CARRITO
let carrito = []
let productoCarritoString = 'Carrito Vacio'

if (localStorage.getItem('carrito')) {
    carrito = JSON.parse(localStorage.getItem('carrito'))
    productoCarritoString = carrito
} else {
    carrito = []
    productoCarritoString = 'Carrito vacio..'
}
