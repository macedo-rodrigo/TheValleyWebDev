/* 
        Crea una función que reciba un array de números, la posición inicial 
        y final del nuevo array (opcional), y devuelva el nuevo array.

        Ejemplo 1: ([1, 2, 3], 0, 1) // => [1]
        Ejemplo 2: ([1, 2, 3], 1) // => [2,3]
*/ 

// opcion 1 
let numeros = [1,2,3];
function ejercicio6(elements, posInicial, posFinal){
    return elements.slice(posInicial, posFinal);
}
console.log(ejercicio6(numeros, 0, 1)); // => [1]
console.log(ejercicio6(numeros, 1)); // => [2,3]


// Opcion 2

function slice2(elements, posInicial, posFinal = elements.length){
  let resultados = [];
  for(i=0; i< elements.length; i++){
	if(i >= posInicial && i<posFinal ){
      resultados.push(elements[i]);
    }
  }
  return resultados
}
console.log(slice2(numeros, 0, 1)); // => [1]
console.log(slice2(numeros, 1)); // => [2,3]