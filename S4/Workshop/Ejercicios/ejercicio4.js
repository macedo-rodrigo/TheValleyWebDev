/*
    Completar el código de la función para que 
    devuelva la suma de los elementos del array.
*/

let numberList = [1,2,-1,3,5,7];

function sumList(list){
    let sum = 0;
    for (let i = 0; i < numberList.length; i++){
        sum+=numberList[i];
    }
    return sum;
}

console.log(sumList(numberList));