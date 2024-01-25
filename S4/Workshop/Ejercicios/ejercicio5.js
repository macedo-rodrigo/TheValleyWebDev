/*
    Completar el código de la función para que 
    devuelva el ganador del balón de oro, siendo 
    el que más puntuación tenga.
    Nota: Os toca investigar como ordenar valores númericos ;) 
*/

let playerList = [
    {name:'Cristiano', score:300},
    {name:'Messi', score:250},
    {name:'Benzema', score:500}
];

function winner(list){
    list.sort((a, b) => b.score - a.score); //Entendí a MEDIAS, me cuesta. Creo que con más practica se me va incorporando.
    
    return list[0];
}

console.log(winner(playerList));

//Aquí no hice solo, busqué en foruns de internet

