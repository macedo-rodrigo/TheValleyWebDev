/*
        Crea una función que reciba como parámetro un string y devuelva otro, 
        remplazando las letras por su posición en el alfabeto.

        Si algún caracter no se encuentra, simplemente lo ignoramos.
*/


let word = "brasil";

function position (str){
    let result = ""; //aquí va el resultado final
    let arrStr = str.split(""); //creo un array con cada letra de mi string
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
    for (i=0; i < arrStr.length; i++){
        result += (alphabet.findIndex(value => value === arrStr[i]) + 1) + '-'; //recisar este metodo para el futuro
    }
    return result
}

console.log(position(word))