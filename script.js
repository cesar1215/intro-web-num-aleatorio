// Objetivo: Dibuja el bottom de bird en lugares aleatorios
// Nota: La altura de la imagen del cielo es de 580px

let bird = document.querySelector(".bird")

/*
Ejercicio 1:
Crea una variable "max" con el valor Math.ceil(580 - 100) 
Crea una variable "min" con el valor Math.min(10.2) 
*/
let max = Math.ceil(580.12 - 100.5);


/*
Ejercicio 2:
Crea una variable "numAleatorio" con el valor de 
un numero aleatorio entre el valor de la variable "min" y el valor de la variable "max"
que creaste en el ejercicio 1.
*/
let numAleatorio

/*
Ejercicio 3: 
Utiliza la propiedad style para que:
1. La propiedad de bottom de bird tenga un numero aleatorio de pixeles
Pista: utiliza el valor de la variable numAleatorio

2. La propiedad left de bird tenga un valor de 250 pixeles
*/
bird.style.left = '200px'