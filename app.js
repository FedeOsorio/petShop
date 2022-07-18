alert("Bienvenido a la sumadora")

let eleccionUsuario = prompt("¿Cuantos números va a sumar? Pueden ser 2, 3 o 4")
eleccionUsuario = Number(eleccionUsuario)
let numero2
let numero3
let numero4
let suma

while (eleccionUsuario != 2 && eleccionUsuario != 3 && eleccionUsuario != 4) {
    alert("El número ingresado es incorrecto");
    let eleccionUsuario2 = prompt("Ingrese 2, 3 o 4");
    eleccionUsuario2 = Number(eleccionUsuario2);
    eleccionUsuario = eleccionUsuario2;
}
    switch (eleccionUsuario) {
        case 2:
        numero1 = prompt("Ingrese el primer número");
        numero1 = Number(numero1);
        numero2 = prompt("Ingrese el segundo número");
        numero2 = Number(numero2);
        suma = numero1 + numero2;
        suma = Number(suma); //Duda: ¿Esta linea de código sobra?
        alert("La suma es: "+numero1+"+"+numero2+"="+suma)
    break;
        
    case 3:
        numero1 = prompt("Ingrese el primer número");
        numero1 = Number(numero1);
        numero2 = prompt("Ingrese el segundo número");
        numero2 = Number(numero2);
        numero3 = prompt("Ingrese el tercer número");
        numero3 = Number(numero3);
        suma = numero1 + numero2 + numero3;
        suma = Number(suma); //Duda: ¿Esta linea de código sobra?
        alert("La suma es: "+numero1+"+"+numero2+"+"+numero3+"="+suma)
    break;
        
    case 4:
        numero1 = prompt("Ingrese el primer número");
        numero1 = Number(numero1);
        numero2 = prompt("Ingrese el segundo número");
        numero2 = Number(numero2);
        numero3 = prompt("Ingrese el tercer número");
        numero3 = Number(numero3);
        numero4 = prompt("Ingrese el cuarto número");
        numero4 = Number(numero4);
        suma = numero1 + numero2 + numero3 + numero4;
        suma = Number(suma);
        alert("La suma es: "+numero1+"+"+numero2+"+"+numero3+"+"+numero4+"="+suma)
    break;
    }





