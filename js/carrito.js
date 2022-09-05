// PRODUCTOS
const misProductos = [
  {
    ref: 10001,
    titulo: "ROYAL CANIN MINI ADULTO X 7.5 KG",
    nombre: "Alimento Mini Royal Canin",
    marca: "Royal Canin",
    especie: "Perro",
    tipo: "Alimento",
    desc: "Royal Canin Mini Adult es un alimento balanceado recomendado para perros adultos de talla pequeña (de 1 a 10 kg) a partir de los 10 meses de edad y hasta los 8 años. Ayuda con el mantenimiento del peso ideal, a un pelaje sano y al control del sarro dental. Además, posee una palatabilidad reforzada.",
    img: "https://catycanar.vtexassets.com/arquivos/ids/155397",
    precio: 8186
  },
  {
    ref: 10002,
    titulo: "EXCELLENT SMART FORMULA PERRO ADULTO 20 KG",
    nombre: "Alimento Purina Excellent Maintenance",
    marca: "Purina",
    especie: "Perro",
    tipo: "Alimento",
    desc: "Excellent Formula Smart es un alimento con ingredientes de alta calidad que proporciona los nutrientes fundamentales para satisfacer todas las necesidades nutricionales de tu mascota. Para adultos desde los 12 meses de edad en adelante, ayuda a mantener los músculos fuertes. Los ácidos grasos Omega 3 y 6 aportan elasticidad a la piel y favorecen a un pelo sano y brillante.",
    img: "https://catycanar.vtexassets.com/arquivos/ids/166429",
    precio: 8731
  },
  {
    ref: 10003,
    titulo: "PRO PLAN PERRO ADULTO MEDIANO X 15 KG + 3 KG",
    nombre: "Alimento Purina Pro Plan Adulto Mediano",
    marca: "Purina",
    especie: "Perro",
    tipo: "Alimento",
    desc: "Pro Plan incorporó a su fórmula de alimentos balanceados la espirulina, componente que ayuda a proteger los sistemas inmune y digestivo de tu perro. Está hecho a base de carne de pollo, que proporciona un alto contenido de proteínas de alto valor biológico, esenciales para su buena alimentación. Procura un balance óptimo de minerales para mantener sus huesos y dientes sanos y fuertes.",
    img: "https://catycanar.vtexassets.com/arquivos/ids/163397",
    precio: 11983
  },
  {
    ref: 10004,
    titulo: "EXCELLENT SMART GATO ADULTO POLLO Y ARROZ 7.5 KG",
    nombre: "Alimento Purina Excellent Smart Gato",
    marca: "Purina",
    especie: "Gato",
    tipo: "Alimento",
    desc: "Excellent Cat Adult Smart es un alimento completo y balanceado a base de proteínas de alta calidad provenientes del pollo y el arroz como principales ingredientes. Ayuda a mantener un pH adecuado en la orina, el cual contribuye a impedir la formación de cálculos y cristales. Los ácidos activos grasos omega 3 y 6 aportan elasticidad a la piel y favorecen a un pelo sano y brillante. También las proteínas de pollo de alta digestibilidad garantizan el desarrollo de músculos fuertes y sanos.",
    img: "https://catycanar.vtexassets.com/arquivos/ids/165943",
    precio: 7172
  },
  {
    ref: 10005,
    titulo: "PRO PLAN GATO ADULTO X 3 KG",
    nombre: "Alimento Purina Pro Plan Gato",
    marca: "Purina",
    especie: "Gato",
    tipo: "Alimento",
    desc: "Purina Pro Plan con OptiPrebio es un alimento balanceado para gatos adultos de 1 a 7 años de edad. Ayuda a optimizar la digestión mediante la correcta absorción de nutrientes; promueve la salud e higiene oral de tu mascota mediante la reducción del sarro dental; también protege la salud del tracto urinario y, al contener pollo fresco como uno de sus principales ingredientes, provee una fuente ideal de proteínas y aminoácidos.",
    img: "https://catycanar.vtexassets.com/arquivos/ids/155442",
    precio: 5231
  },
  {
    ref: 10006,
    titulo: "ALIMENTO PARA CONEJOS NELSONI RANCH X 750 GR",
    nombre: "Alimento Balanceado Conejos",
    marca: "Nelsoni Ranch",
    especie: "Conejo",
    tipo: "Alimento",
    desc: "El balanceado para conejos de Nelsoni Ranch provee una óptima alimentación con todas las vitaminas y nutrientes, manteniendo a tu mascota vital y feliz.",
    img: "https://catycanar.vtexassets.com/arquivos/ids/155569",
    precio: 363
  },
  {
    ref: 10007,
    titulo: "ALIMENTO PRODAC TARTAFOOD GAMMARUS 50ML",
    nombre: "Alimento Tortugas Tarta Food",
    marca: "Prodac",
    especie: "Reptiles",
    tipo: "Alimento",
    desc: "Alimento completo y balanceado para tortugas de agua.",
    img: "https://catycanar.vtexassets.com/arquivos/ids/159892",
    precio: 935
  },
  {
    ref: 10008,
    titulo: "MIX HAMSTER X 750 GRS",
    nombre: "Alimento Mix Hamsters",
    marca: "Nelsoni Ranch",
    especie: "Roedores",
    tipo: "Alimento",
    desc: "Zubat es un PokéLos ingredientes que posee en su composición son: soja, alfalfa, avena y trigo integral que contribuyen con un buen estado de salud general. Contiene, además, una cantidad exacta de minerales ya que evitan problemas normalmente asociados a dietas comunes.",
    img: "https://catycanar.vtexassets.com/arquivos/ids/162794",
    precio: 363
  }
]

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
  toastr["warning"]('Vaciaste el carrito')
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
