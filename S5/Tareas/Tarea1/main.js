/* 
    Dado el siguiente array, muestra por consola
    la suma de premios de los jugadores de uruguay
*/

const players = [
    {name: 'Cristiano Ronaldo', country: 'Portugal', goldenBall: 5 , goldenBoot: 6},
    {name: 'Lionel Messi', country: 'Argentina', goldenBall: 7, goldenBoot: 4},
    {name: 'Luis Suárez', country: 'Uruguay', goldenBall : 0, goldenBoot: 2},
    {name: 'Diego Forlan', country: 'Uruguay', goldenBall :0 , goldenBoot: 2},
    {name: 'Thierry Henry', country: 'Francia', goldenBall : 0, goldenBoot: 2}
]

/*let uruguayPlayers = players.filter(element => element.country === "Uruguay");
let uruguayAwards = uruguayPlayers.map(element => element.goldenBall + element.goldenBoot);
let uruTotalAwards = uruguayAwards.reduce((acc, element) => acc + element,0);

console.log(uruguayPlayers)
console.log(uruguayAwards)
console.log("Entre Golden Balls y Golden Boots, Uruguay tiene " + uruTotalAwards + " premios.")*/


let uruTotalAwards = players
.filter(element => element.country === "Uruguay")
.map(element => element.goldenBall + element.goldenBoot)
.reduce((acc, element) => acc + element,0);


console.log("Entre Golden Balls y Golden Boots, Uruguay tiene " + uruTotalAwards + " premios.")