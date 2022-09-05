let carrito = [];
let unicos = [];
let carritoCosto = [];
let carritoGuardado = []

// INTERACCIÓN CON HTML
const cardContainerQuery = document.querySelector('#carrito')

// OBTENER CARRITO GUARDADO DEL LOCALSTORAGE
const carritoDesc = document.querySelector('.carritoDesc')
const carritoPrecio = document.querySelector('.carritoPrecio')
const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
let sumarCarrito = 0

if (localStorage.getItem('carrito')) {
  carrito = JSON.parse(localStorage.getItem('carrito'))
  unicos = JSON.parse(localStorage.getItem('unicos'))
  carritoCosto = JSON.parse(localStorage.getItem('carritoCosto'))
  carritoNombre = JSON.parse(localStorage.getItem('carritoNombre'))
  carritoGuardado = carrito
} else {
  carritoDesc.textContent = 'Carrito vacio'
  DOMtotal.textContent = '$ 0'
  carrito = []
  unicos = []
  carritoCosto = []
  carritoNombre = []
  sumarCarrito = 0
}

let carritoActualizado = []

sumarCarrito = carritoGuardado.map(item => item.precio).reduce((prev, curr) => prev + curr, 0);
DOMtotal.textContent = divisa + ' ' + sumarCarrito

const botonEliminarItem = document.querySelector('.eliminarItemCarrito')

const eliminarItemCarrito = (e) => {
  const pokemonIdSeleccionado = e.target.closest('.eliminarItemCarrito').getAttribute('data-id')
  carritoActualizado = carritoGuardado.filter((producto) => producto.ref != pokemonIdSeleccionado)
  renderizarCarrito(carritoActualizado)
  carrito = carritoActualizado
  localStorage.setItem('carritoActualizado', JSON.stringify(carritoActualizado))
  localStorage.setItem('carrito', JSON.stringify(carrito))
}

// DOM
const renderizarCarrito = (array) => {
  cardContainerQuery.innerHTML = ''
  array.forEach((producto) => {
    const itemsCarrito = document.createElement('div')
    itemsCarrito.classList.add('itemsCarrito')
    itemsCarrito.setAttribute('data-id', producto.titulo)
    itemsCarrito.innerHTML = `
      <div class="cardBoxCarrito">
      <img src="${producto.img}" class="cardImgCarrito">
      <p class="cardDescCarrito"> ${producto.titulo}</p>
      <span class="cardPriceCarrito"> $${producto.precio} </span>
      <div><a href="carrito.html"><button class="eliminarItemCarrito" data-id=${producto.ref}> X </button></a></div>
      <div>
      `
    itemsCarrito.className = 'cardCarrito'
    cardContainerQuery.append(itemsCarrito)
  })
  document.querySelectorAll('.eliminarItemCarrito').forEach((button) => {
    button.addEventListener('click', eliminarItemCarrito)
  })
}
renderizarCarrito(carritoGuardado)

// VACIAR CARRITO
const DOMbotonVaciar = document.querySelector('.botonVaciarCarrito')

const vaciarCarrito = () => {
  localStorage.clear()
  carrito = []
  elementosUnicos = []
  carritoCosto = []
  carritoNombre = []
  toastr["warning"]('Se vació el carrito')
  carritoGuardado = []
  sumarCarrito = 0
  cardContainerQuery.innerHTML = ''
  cardContainerQuery.innerHTML = `
    <div class="cardBox">
    <p class="cardDesc"> Carrito vacio</p>
    <span class=""> </span>
    <div>
    `
  DOMtotal.textContent = divisa + ' ' + sumarCarrito
}
DOMbotonVaciar.addEventListener('click', vaciarCarrito)

// BOTON FINALIZAR COMPRA
const botonFinalizarCompra = document.querySelector('.botonFinalizarCompra')

const finalizarCompra = () => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: true
  })

  swalWithBootstrapButtons.fire({
    title: 'Total de su compra: $' + sumarCarrito,
    text: "¿Desea continuar?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Confirmar',
    cancelButtonText: 'Cancelar',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed && carritoDesc.textContent != "Carrito vacio") {
      swalWithBootstrapButtons.fire(
        '¡Felicidades!',
        'Su pago ha sido procesado',
        'success'
      )
      vaciarCarrito();
    }
    else if (result.dismiss === Swal.DismissReason.cancel) {
      swalWithBootstrapButtons.fire(
        'Cancelado',
        'No se efectuaron gastos.',
        'error'
      )
    }
    else if (carritoDesc.textContent == "Carrito vacio") {
      swalWithBootstrapButtons.fire(
        'Error',
        'El carrito está vacio.',
        'error'
      )
    }
  })
}
botonFinalizarCompra.addEventListener('click', finalizarCompra)
