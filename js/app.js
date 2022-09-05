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
        <h3 class="cardTitle"> ${producto.mascota} </h3>
        <a href="productos.html"><img src="${producto.imgSrc}" class="cardImg"></a>
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
    const response = await fetch('js/data/mascotas.json')
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

// BARRA DE BÚSQUEDA
const buscarProducto = () => {
    const query = searchBar.value.toLowerCase()
    const arrayResultados = productos.filter((producto) => producto.mascota.toLowerCase().includes(query))
    renderizarLista(arrayResultados)
}
searchBar.addEventListener('input', buscarProducto)
searchButton.addEventListener('click', buscarProducto)
