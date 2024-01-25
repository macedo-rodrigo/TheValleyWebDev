/*
   Completar la función para que, recibida una palabra,
   devuelva el caracter que está en el medio. Si la palabra
   es par, devuelve los dos caracteres.

   Ejemplo: camión => mi

*/

let word = "camino";

function middleCharacter(str){
   let halfWord = Math.floor(str.length / 2);

   if (str.length % 2 === 0) {
   return str.slice(halfWord - 1, halfWord + 1);
   } else {
   return str[halfWord];
   }
}

console.log(middleCharacter(word));
