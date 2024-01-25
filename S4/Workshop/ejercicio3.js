/*
        Crea una función que reciba como argumento un array de números 
        y devuelva aquel que aparecen únicamente un número impar de veces.

        Ejemplos: 

            [1]         → Devuelve el número 1, ya que aparece una única vez
            [3,3,5]     → Devuelve el 5, ya que aparece 1 vez.
            [2,1,1,2,2] → Devuelve 2, ya que aparece 3 veces
*/

/*const numeros = [1,2,1,3,3,5];
function contadorRepetidosImpares(numerosComprobar) {
  let texto = '';
  let resultados = [
    {
      numero: numerosComprobar[0],
      nRepetidos: 1
    }
  ];
  for(let i=1; i< numerosComprobar.length; i++) {
    const indexExist = resultados.findIndex(val => numerosComprobar[i] === val.numero);
    if (indexExist === -1) {
      resultados.push({numero: numerosComprobar[i], nRepetidos: 1});
    } else {
      resultados[indexExist].nRepetidos++;
    }
  }

  let numerosADevolver = []
  resultados.forEach(value => {
    if (value.nRepetidos % 2 !== 0) {
        numerosADevolver.push(value.numero);
      texto += El numero ${value.numero} aparece una cantidad impar ${value.nRepetidos} de veces \n;
    }
  })
  return numerosADevolver;
}
// contadorRepetidosImpares(numeros)
console.log(contadorRepetidosImpares(numeros));*/

//Abordaje que hice con Zeky

const numeros = [1,2,1,3,3,5];
function numerosQueAparecenImpares(listadoDeNums){
    let repeticionDeNumeros =[];
    //Vamos uno por uno por cada uno de los numeros que me pasan
    for(i=0; i<listadoDeNums.length ;i++ ){
        let queNumeroEstoyTrabajando = listadoDeNums[i]
        let elNumeroEstaEnMiSectorDondeGuardoLaCantidadDeVeces =false;
        for(j=0; j< repeticionDeNumeros.length; j++){  // Recorro mi sector donde guardo la cantidad de veces que aparece cada numero.
            if(queNumeroEstoyTrabajando === repeticionDeNumeros[j].numero){
                elNumeroEstaEnMiSectorDondeGuardoLaCantidadDeVeces =true;
                repeticionDeNumeros[j].cantidaddeveces++;
            }
        }
        if (elNumeroEstaEnMiSectorDondeGuardoLaCantidadDeVeces != true){
            //Agregarlo
            repeticionDeNumeros.push(
                {
                    numero: queNumeroEstoyTrabajando,
                    cantidaddeveces: 1 
                }
            );
        }
    }  
    let resultado= [];
    for(i=0; i< repeticionDeNumeros.length; i++ ) 
    {
        if( repeticionDeNumeros[i].cantidaddeveces % 2 ===1){
            resultado.push(repeticionDeNumeros[i].numero);
        }
    }

    return resultado;
}
console.log(numerosQueAparecenImpares(numeros));



















/*let result = [
    ]
    for (let i=0; i <= arry.length; i++){ // bucle para que recorra el array
        let exist = result.includes(value => value.numero === arry[i]);
        console.log(exist);
        if(exist === true) {

        } else 
    }
}

if (arry[i] % 2 !== 0)*/