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

// FUNCIONAMIENTO DEL CARRITO
const botonesAgregarCarrito = document.querySelectorAll('.agregarCarrito')

console.log(productoCarritoString);

const carritoDesc = document.querySelector('.carritoDesc')
const textoCarrito = carritoDesc.innerHTML
carritoDesc.textContent = productoCarritoString
console.log(textoCarrito)


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
    text: "Va a adquirir " + carritoDesc.textContent,
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