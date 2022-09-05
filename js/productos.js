// PRODUCTOS
const misProductos = [
    {
        ref: 10001,
        titulo: "ALIMENTO ROYAL CANIN MINI ADULTO X 7.5 KG",
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
        titulo: "EXCELLENT SMART PERRO ADULTO 20 KG",
        nombre: "Alimento Purina Excellent Maintenance",
        marca: "Purina",
        especie: "Perro",
        tipo: "Alimento",
        desc: "Excellent Formula Smart es un alimento con ingredientes de alta calidad que proporciona los nutrientes fundamentales para satisfacer todas las necesidades nutricionales de tu mascota. Para adultos desde los 12 meses de edad en adelante, ayuda a mantener los músculos fuertes. Los ácidos grasos Omega 3 y 6 aportan elasticidad a la piel y favorecen a un pelo sano y brillante.",
        img: "https://catycanar.vtexassets.com/arquivos/ids/158202",
        precio: 8731
    },
    {
        ref: 10003,
        titulo: "PRO PLAN PERRO ADULTO MEDIANO X 15 KG",
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
        titulo: "EXCELLENT SMART GATO ADULTO 7.5 KG",
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
        titulo: "PRO PLAN GATOS ADULTO X 3 KG",
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
        titulo: "ALIMENTO PARA CONEJOS NELSONI X 750 GR",
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
        titulo: "PRODAC TARTAFOOD GAMMARUS 50ML",
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

// DESESTRUCTURACIÓN
const AlRoyalCaninMini = misProductos[0]
const AlExcelSmartP = misProductos[1]
const AlProplanAd = misProductos[2]
const AlExcelSmartG = misProductos[3]
const AlProplanG = misProductos[4]
const AlConejos = misProductos[5]
const AlTartaFood = misProductos[6]
const AlMixHamsters = misProductos[7]

console.log(misProductos);

class Alimento {
    constructor(ref, titulo, nombre, marca, especie, tipo, desc, img, precio) {
        this.ref = ref
        this.titulo = titulo
        this.nombre = nombre
        this.marca = marca
        this.especie = especie
        this.tipo = tipo
        this.desc = desc
        this.img = img
        this.precio = precio
    }
}

// INTERACCIÓN CON HTML
const cardContainerQuery = document.querySelector('#cardContainerProd')

// DOM
const renderizarLista = (array) => {
    cardContainerQuery.innerHTML = ''
array.forEach((producto) => {
    const productoDiv = document.createElement('div')
    productoDiv.setAttribute('data-id', producto.nombre)
    productoDiv.innerHTML = `
        <div class="cardBoxProd">
        <div class="cardImgProd"><img src="${producto.img}" class="imgProd"></div>
        <p class="cardDescProd"> ${producto.titulo}</p>
        <p class="cardPrice"> $${producto.precio}</p>
        <div><button class="agregarCarrito" data-id=${producto.ref}> Comprar</button></div>
        </div>
        `
    productoDiv.className = 'cardProd'
    cardContainerQuery.append(productoDiv)
})
}
renderizarLista(misProductos)

// VARIABLES PARA EL CARRITO
let carrito = []
let carritoNombre = []
let carritoCosto = []
let productoEnCarrito = ''
let productoPrecio = []
let carritoPrecioInt = 0
let productoNombre = []

// GUARDAR PRODUCTOS EN CARRITO
const guardarEvento = (click) => {
    const productoArray = click.target.getAttribute('data-id')
    switch (productoArray) {
        case "10001":
            productoNombre = AlRoyalCaninMini.nombre
            productoEnCarrito = AlRoyalCaninMini
            productoPrecio = AlRoyalCaninMini.precio
            break;
        case "10002":
            productoNombre = AlExcelSmartP.nombre
            productoEnCarrito = AlExcelSmartP
            productoPrecio = AlExcelSmartP.precio
            break;
        case "10003":
            productoNombre = AlProplanAd.nombre
            productoEnCarrito = AlProplanAd
            productoPrecio = AlProplanAd.precio
            break;
        case "10004":
            productoNombre = AlExcelSmartG.nombre
            productoEnCarrito = AlExcelSmartG
            productoPrecio = AlExcelSmartG.precio
            break;
        case "10005":
            productoNombre = AlProplanG.nombre
            productoEnCarrito = AlProplanG
            productoPrecio = AlProplanG.precio
            break;
        case "10006":
            productoNombre = AlConejos.nombre
            productoEnCarrito = AlConejos
            productoPrecio = AlConejos.precio
            break;
        case "10007":
            productoNombre = AlTartaFood.nombre
            productoEnCarrito = AlTartaFood
            productoPrecio = AlTartaFood.precio
            break;
        case "10008":
            productoNombre = AlMixHamsters.nombre
            productoEnCarrito = AlMixHamsters
            productoPrecio = AlMixHamsters.precio
            break;
        default:
            break;
    }
    carrito.push(productoEnCarrito)
    carritoNombre.push(productoNombre)
    carritoCosto.push(productoPrecio)

    // ELIMINAR DUPLICADOS PARA MOSTRAR CARRITO
    let unicos = [];

    for (var i = 0; i < carritoNombre.length; i++) {
        const elemento = carritoNombre[i];
        if (!unicos.includes(carritoNombre[i])) {
            unicos.push(elemento);
        }
    }

    localStorage.setItem('unicos', JSON.stringify(unicos))
    localStorage.setItem('carrito', JSON.stringify(carrito))
    localStorage.setItem('carritoCosto', JSON.stringify(carritoCosto))
    localStorage.setItem('carritoNombre', JSON.stringify(carritoNombre))

    carritoPrecioInt = carritoCosto.map(function (x) {
        return parseInt(x);
    });
    console.log(carritoPrecioInt);

    // ALERTA CONFIRMANDO OPERACIÓN
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Agregaste al carrito: ',
        text: productoNombre + ' - $' + productoPrecio,
        showConfirmButton: false,
        timer: 2000
    })

}
document.querySelectorAll('.agregarCarrito').forEach((button) => {
    button.addEventListener('click', guardarEvento)
})

// EJECUCIÓN DE guardarEvento AL HACER CLICK
const botonesAgregarCarrito = document.querySelectorAll('.agregarCarrito')

botonesAgregarCarrito.forEach((boton) => {
    boton.addEventListener('click', guardarEvento)
})

// OBTENER CARRITO GUARDADO DEL LOCALSTORAGE
const carritoDesc = document.querySelector('.carritoDesc')
const carritoPrecio = document.querySelector('.carritoPrecio')

if (localStorage.getItem('carrito')) {
    carrito = JSON.parse(localStorage.getItem('carrito'))
    unicos = JSON.parse(localStorage.getItem('unicos'))
    carritoCosto = JSON.parse(localStorage.getItem('carritoCosto'))
    carritoNombre = JSON.parse(localStorage.getItem('carritoNombre'))
    productoCarritoString = carrito
    carritoGuardado = carrito
} else {
    carrito = []
    unicos = []
    carritoCosto = []
    carritoNombre = []
}
