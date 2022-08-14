# Lab: Obteniend un Número Aleatorio

## Objetivos
- Obtener un numero aleatorio entre dos valors utilizando `Math.floor` y `Math.random`
- Cambiar el estilo de un elemento utilizando `.style`

## Introducción
Hemos aprendido que la propiedad `.style` de une elemento DOM proporciona acesso al estilo en línea de esa etiqueta HTML. Es hora de poner en práctica nuestros aprendizajes. 

## Instrucciones
Bifurca (fork) y clona (clone) este lab en tu entorno local. Navega a su directorio en la terminal, luego ejecuta el comando `code .` para abrir sus archivos en Visual Studio Code. 

1. Crea una variable `max` con el valor `Math.ceil(580.12 - 100)` 

2. Crea una variable `min` con el valor `Math.min(10.2) `

3. Crea una variable `numAleatorio` con el valor de un numero aleatorio entre el valor de la variable `min` y el valor de la variable `max`
que creaste en el paso anterior.

4. Utiliza la propiedad `style` para que:
* La propiedad de `bottom` de `bird` tenga un numero aleatorio de pixeles. **Pista: utiliza el valor de la variable `numAleatorio`**
* La propiedad `left` de `bird` tenga un valor de `'250px'` 
