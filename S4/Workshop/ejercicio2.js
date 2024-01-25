/*
        Si enumerásemos todos los números naturales por debajo de 10 que 
        fuesen múltiplos de 3 y de 5 tendríamos el siguiente listado (3, 5, 6 y 9). 
        La suma de estos múltiplos sería 23.

        Crea un función que devuelva la suma de todos los múltiplos de 3 y 5 del 
        número que le pasemos.

        En caso de que el número sea múltiplo de ambos solo habrá que contarlo 
        un vez.
*/

let givenNumber = 15; 

function multiplesCounter(n){
    let multiplesSum = 0; //Creo una vaeriable para la suma de los multiplos.
    let multiplesList = []; //Pensé pintar tbn la lista de multiplos para practicar.

    for (let i = 1; i <= n; i++){ //condicionando el limite del bucle
        if (i % 3 === 0 || i % 5 === 0){
            multiplesList.push(i); //Los agrego a un array vacñio que cree para listarlos.
            multiplesSum += i; //Para ir sumándolos.
        }
    }
    console.log("Los múltiplos de 3 y 5 de este número son: " + multiplesList);
    return multiplesSum;
}

console.log("Y la suma de todos estos números es: " + multiplesCounter(givenNumber))