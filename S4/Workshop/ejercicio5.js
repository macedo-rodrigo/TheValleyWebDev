/*
    Crea una función que reciba una serie de arrays como argumentos 
    y devuelva uno único ordenado.

    Ejemplo: 
        Recibe: 
            ([['Cristiano', 'Messi'], ['Neymar', 'Mbappe', Benzema'], 
            ['Vinicius', 'Kane']])  
        Devuelve: 
            ['Benzema', 'Cristiano', 'Kane', 'Mbappe', 'Messi', 
            'Neymar', 'Vinicius']
*/

let arrVarius = [['Cristiano', 'Messi'], ['Neymar', 'Mbappe', 'Benzema'], ['Vinicius', 'Kane']];

function concatArrays (ar){
    let result = [];
    for (i=0; i<ar.length; i++){
        result = result.concat(ar[i]); //nunca usar el indice i solo en el concat, siempre de forma de array [i] antecido de la variable/parametro de la funcion
    }

    
    result.sort();
    return result;

}

console.log(concatArrays(arrVarius));