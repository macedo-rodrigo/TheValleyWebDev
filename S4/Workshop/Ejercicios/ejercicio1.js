/*
    Completar el código de la función para que 
    devuelva la frase recibida sin vocales.
*/

let sentence1 = 'Hola soy Edu Feliz Navidad';

function noVowels(str){
        return str.replace(/[aeiou]/gi,"");
}

console.log(noVowels(sentence1));