/* 
    Dado el siguiente array:

    1) Muestra por consola el listado de nombres de los millonarios
    2) Muestra por consola (true/false) si está Amancio en la lista
    2) Muestra por consola un listado con el resultado de dividir su patrimonio patrimonio entre los años que tienen
    3) Muestra por consola la media de edad de los 10 billonarios de la lista forbes
    4) Muestra por consola la suma de dinero de los millonarios de EEUU que están relacionados con technología
    5) Muestra por consola el millonario más joven que no sea de EEUU
    6) Muestra por consola el millonario más mayor del top 5 de millonarios de EEUU
*/

const forbesList = [
    {name: 'Elon Musk', amount: 219, age: 50, country:'EEUU', company:'Tesla', industry: 'Automotive'},
    {name: 'Jeff Bezos', amount: 171, age: 58, country:'EEUU', company:'Amazon', industry: 'Technology'},
    {name: 'Bernard Arnault', amount: 158, age: 73, country:'France', company:'LVMH', industry: 'Fashion'},
    {name: 'Bill Gates', amount: 129, age: 66, country:'EEUU', company:'Microsoft', industry: 'Technology'},
    {name: 'Warren Buffet', amount: 118, age: 91, country:'EEUU', company:'Berkshire', industry: 'Finance'},
    {name: 'Larry Page', amount: 111, age: 49, country:'EEUU', company:'Google', industry: 'Technology'},
    {name: 'Sergey Brin', amount: 171, age: 58, country:'EEUU', company:'Google', industry: 'Technology'},
    {name: 'Larry Ellison', amount: 106, age: 77, country:'EEUU', company:'Software', industry: 'Technology'},
    {name: 'Steve Ballmer', amount: 91, age: 66, country:'EEUU', company:'Microsoft', industry: 'Technology'},
    {name: 'Mukesh Ambani', amount: 90, age: 64, country:'India', company:'Diversified', industry: 'Finance'},
]

//1. Para crear un nuevo array solo con los nombre de los millonarios, voy a utilizar el .map

let millionairsNames = forbesList.map(item => item.name);
console.log(millionairsNames);

//2. Me sale undefine porque justamente "Amancio" no está, no sé si esto sirve como el "false" que pide el ejercicio.
let isAmancioThere = millionairsNames.find(item => item.name === "Amancio");
console.log(isAmancioThere);

//3. Vuelvo a usar .map para crear un nuevo array con el amount / age.
let amountByAge = forbesList.map(item => item.amount / item.age);
console.log(amountByAge);

//4.
let forbesAverageAge = forbesList.reduce((acc, item) => acc + item.age,0);
console.log(forbesAverageAge / forbesList.length); //Imprimo dividiendo por el numero de posiciones

//5.
let usaAndTech = forbesList.filter(item => item.country === "EEUU" && item.industry === "Technology");
console.log(usaAndTech);