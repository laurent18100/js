/*
variable rayon en entier
variable airecercle en flottant
lire rayon
airecle <- puissance(rayon,2) * pi
*/

let rayon = prompt("rayon du cercle?")
let airecercle = Math.pow(parseInt(rayon),2)*Math.PI;
alert("aire du cercle de rayon = "+rayon+" = " +airecercle);