//Práctica de Funciones, Arreglos y Objetos.

//Ejercicios de Funciones:

/* Escribe una función llamada &quot;esMayorEdad&quot; que reciba una edad como parámetro y devuelva
true si la edad es mayor o igual a 18, y false en caso contrario. */ 

// function esMayorEdad(edad) {
//     if (edad >= 18) {
//       return true;
//     } else{
//         return false;
//     }
//   }
//   console.log(esMayorEdad(2));

/* Crea una función llamada &quot;calcularAreaRectangulo&quot; que tome dos parámetros: base y altura.
La función debe calcular y devolver el área del rectángulo utilizando la fórmula área = base *
altura. */ 

// function calcularAreaRectangulo(base, altura) {
//     let area = base * altura;
//     return area;
//   }
  
// console.log(calcularAreaRectangulo(2,5));

/* Implementa una función llamada &quot;esPalindromo&quot; que reciba una cadena como parámetro y
devuelva true si la cadena es un palíndromo (se lee igual de izquierda a derecha y de derecha a
izquierda), y false en caso contrario. Por ejemplo, para la cadena &quot;radar&quot; la función debería
devolver true. */ 

// function esPalindromo(cadena) {
//     let cadenaReversa = cadena.split('').reverse().join('');
//     return cadena === cadenaReversa;
//   } 

//   console.log(esPalindromo("hola"));
//   console.log(esPalindromo("radar"));

/* Crea una función llamada &quot;generarNumeroAleatorio&quot; que no tome parámetros y devuelva un
número entero aleatorio entre 1 y 10. */ 

// function generarNumeroAleatorio() {
//     let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
//     return numeroAleatorio;
//   }

//   console.log(generarNumeroAleatorio());
//   console.log(generarNumeroAleatorio());

// Ejercicios de Arreglos:

/* Crea una función llamada &quot;obtenerSuma&quot; que reciba un arreglo de números como parámetro y
devuelva la suma de todos los elementos del arreglo. */

// let vector=[1,2,3,4,5,6];
// let vector1=[2,25,4,1,8,7];
// let suma=0;

// function obtenerSuma(vector){
//   for (let i=0; i<vector.length; i++){
//     suma +=vector[i];
//   }
//   return console.log(suma);
// }

// obtenerSuma(vector);
// obtenerSuma(vector1);

/* Implementa una función llamada &quot;obtenerPares&quot; que tome un arreglo de números como
parámetro y devuelva un nuevo arreglo con solo los números pares del arreglo original. */

// let vector=[2,3,6,12,79,45,48,26,7];

// function obternerPares(vector){
//     let vectorPar=[];
//     for(let i=0; i<vector.length; i++){
//         if (vector[i]%2===0){
//             vectorPar.push(vector[i]);
//         }
//     } 
//     return vectorPar;
// }

// console.log(obternerPares(vector));

/* Escribe una función llamada &quot;obtenerPromedioPonderado&quot; que reciba dos arreglos: uno con
las notas de los estudiantes y otro con los pesos correspondientes. La función debe calcular y
devolver el promedio ponderado de las notas. */



/* Crea una función llamada &quot;obtenerMaximo&quot; que tome un arreglo de números como
parámetro y devuelva el número máximo encontrado en el arreglo. */

// let vector=[4,21,15,32,31,9,10,89,87,19];

// function obtenerMaximo(vector){
//     let maximo=-99999;
//     for(let i=0; i<vector.length; i++){
//         if(vector[i]>maximo){
//             maximo=vector[i];
//         }
//     }
//     return maximo;
// }

// console.log(obtenerMaximo(vector));


//Ejercicios de Objetos:

/* Crea un objeto llamado &quot;producto&quot; con las propiedades &quot;nombre&quot;, &quot;precio&quot; y &quot;cantidad&quot;.
Luego, escribe una función llamada &quot;calcularTotal&quot; que tome un objeto producto como
parámetro y devuelva el total a pagar (precio * cantidad). */

// const producto={
//     nombre:"Auriculares",
//     precio: 5000,
//     cantidad: 3
// }

// function calcularTotal(objeto){
//     return objeto.precio*objeto.cantidad;
// }

// console.log(calcularTotal(producto));

/* Implementa un objeto llamado &quot;persona&quot; con las propiedades &quot;nombre&quot;, &quot;edad&quot; y &quot;profesion&quot;.
A continuación, escribe una función llamada &quot;presentarPersona&quot; que tome un objeto persona
como parámetro y muestre en la consola una presentación de la persona. */

// const persona={
//     nombre:"Walter",
//     edad: 35,
//     profesion:"Desarrollador de Software y Multiplataforma"
// }

// function presentarPersona(objeto){
// return objeto.nombre+" "+objeto.edad+" años "+objeto.profesion;
// }

// console.log(presentarPersona(persona));

/* Crea una función llamada &quot;esMayorEdad&quot; que reciba un objeto persona como parámetro y
devuelva true si la persona es mayor de edad (edad mayor o igual a 18), y false en caso
contrario. */

// const persona={
//     nombre:"Dalmi",
//     apellido:"Acosta",
//     edad:18
// }

// function esMayorEdad(objeto){
//     if(objeto.edad>=18){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(esMayorEdad(persona));


// Resolver los siguientes ejercicios utilizando Funciones, Arreglos y Objetos (Si es necesario)

/* Crear un programa que pida al usuario que ingrese un número y le devuelva un
mensaje indicando si el número es positivo, negativo o si es 0. */

// let numero = parseFloat(prompt("Ingrese un número:"));


// if (numero > 0) {
//   console.log("El número es positivo");
// } else if (numero < 0) {
//   console.log("El número es negativo");
// } else {
//   console.log("El número es 0");
// }



/* Crear un programa que pida un numero al usuario y le devuelva un mensaje diciendo si
el número es primo o no. */

// function esPrimo(numero) {
//     if (numero < 2) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(numero); i++) {
//         if (numero % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// const numero = parseInt(prompt("Ingrese un número: "));

// if (esPrimo(numero)) {
//     console.log("El número es primo.");
// } else {
//     console.log("El número no es primo.");
// }

/* Aclaración: los números primos son aquellos que tienen exactamente 4 divisores, 2
positivos y 2 negativos y que son mayores que 1. */

/*  Crear un programa que convierta la temperatura de grados Celsius a Faranheit y
viceversa. El usuario debería ingresar la temperatura y a que unidad la quiere
convertir. */ 

// function celsiusToFahrenheit(celsius) {
//     return (celsius * 9/5) + 32;
// }

// function fahrenheitToCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5/9;
// }

// const temperatura = parseFloat(prompt("Ingrese la temperatura:"));
// const unidad = prompt("Ingrese la unidad de temperatura (C o F):");

// if (unidad.toUpperCase() === "C") {
//     const fahrenheit = celsiusToFahrenheit(temperatura);
//     console.log(`${temperatura} grados Celsius equivale a ${fahrenheit} grados Fahrenheit.`);
// } else if (unidad.toUpperCase() === "F") {
//     const celsius = fahrenheitToCelsius(temperatura);
//     console.log(`${temperatura} grados Fahrenheit equivale a ${celsius} grados Celsius.`);
// } else {
//     console.log("Unidad de temperatura no válida. Ingrese C para Celsius o F para Fahrenheit.");
// }

/* Crear un programa para calcular el total de una compra. Para ello se tiene que pedir al
usuario que ingrese el precio de cada producto y cuando se le pide que ingrese la
palabra &quot;total&quot; devolverle el total de la compra. */ 

// function sumaTotal(){
//     let suma=0;
//     let precioProducto=prompt("Ingrese el precio del producto, si desea finalizar escriba 'total' para obtener la suma")
//     while (precioProducto.toLowerCase()!="total"){
//      suma+=parseFloat(precioProducto);
//      precioProducto=prompt("Ingrese el precio del producto cuando termine  escriba total para la suma")
//     }
//   return console.log(suma);
//  }
 
 
//  sumaTotal();
