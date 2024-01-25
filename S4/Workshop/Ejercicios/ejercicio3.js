/*
    Completar el código de la función para que 
    devuelva la frase recibida sin el primer y último parámetro.

*/

let sentence = 'Hola Don Pepito, hola Don José';

function deleteFirsLast(str){
    let newArray = str.split(" "); //para dividir el string por palabra
    let lastPosition = newArray.length; //para saber la cantidad de parametros y, por lo tanto, sacar el ultimo.
    return newArray.slice(1,lastPosition-1);//aplicando el -1 para quitar el ultimo parámetro del nuevo array.
}

console.log(deleteFirsLast(sentence));

