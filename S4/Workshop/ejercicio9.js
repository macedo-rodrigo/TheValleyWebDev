/* 
        Crea una función que reciba la lista de regalos de los reyes magos 
        y la ordene según la propiedad elegida.

        Ejemplo:        
            Entrada: 
                    ([{nombre: ‘Barbie’, categoria: ‘muñecas’ },
                    {nombre: ‘Lego’, categoria:’construcción’ },
                    {nombre: ‘Fifa2023’, categoria:’videojuego’ }], ‘nombre’);

            Salida:
                    [{nombre: ‘Barbie’, categoria: ‘muñecas’ },
                    {nombre: ‘Fifa2023’, categoria:’videojuego’ }
                    {nombre: ‘Lego’, categoria:’construcción’ }]
*/ 

regalos =  [
    {nombre: "Barbie", categoria: "muñecas" },
    {nombre: "Lego", categoria:"construcción" },
    {nombre: "Fifa2023", categoria:"videojuego" }]

function compararRegalosPorNombre(regaloA, regaloB, nombre){
if (regaloA.nombre > regaloB.nombre )
return 1
if (regaloA.nombre < regaloB.nombre)
return -1
return 0
}

function compararRegalosPorCategoria(regaloA, regaloB){
if (regaloA.categoria > regaloB.categoria)
return 1
if (regaloA.categoria < regaloB.categoria)
return -1
return 0
}

function ordenarporpropiedad(listado, nombrepropiedad){
if (nombrepropiedad==="nombre")
listado.sort(compararRegalosPorNombre) // hemos tenido que usar un sort con parametro para que el problema se solucione!
else
listado.sort(compararRegalosPorCategoria)

return listado
}

console.log( ordenarporpropiedad(regalos, "nombre") )