/*
        Crear una función que devuelva el número de vocales 
        que tiene el string que le pasemos como parámetro.

        Consideramos que el string solo tiene letras minúsculas y espacios.
*/

/*let mySentence = "garota de ipanema";

function counter (sentence){ //creo una funcion para contar el numero de vocales
    let vowelsNumber = sentence.match(/[aeiou]/gi); //Busco coincidencias en la expresiòn regular. Saqué match() de internet.
    if (vowelsNumber === null){ // Output si no hay vocales
        return 0;
    } else {
        return vowelsNumber.length; //esta variable solo contiene vocales
    }
}
let cantidadDeVocales 
console.log("Esta frase contiene " + counter(mySentence) + " vocales.")*/

//otro abordajem más sencillo

let mySentence = "garota";

function contadorDeVocales(sentence){ //creo una funcion para contar el numero de vocales
    let resultado = 0;

    for(i=0; i<sentence.length;i++){
        if(sentence[i] === "a" || sentence[i] === "e" || sentence[i] === "i" || sentence[i] === "o" || sentence[i] === "u"){
            resultado = resultado +1;
        }
    }
    return resultado;
}
console.log("Esta frase contiene " + contadorDeVocales(mySentence) + " vocales.");