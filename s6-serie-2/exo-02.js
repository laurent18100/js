/*
let birth = new Date(1756,0,27);
let death = new Date(1791,11,5);
console.log (birth);
console.log (death);
*/

function conversionEnAnnee(pNbMillisec)
{
return Math.trunc((pNbMillisec)/(1000*60*60*24*365))      
}
function conversionAnneeenMs(pNbAnnee)
{
return Math.trunc((pNbAnnee)*(1000*60*60*24*365))      
}
function conversionEnMois(pNbMillisec)
{
return Math.trunc((pNbMillisec)/(1000*60*60*24*31))      
}
function conversionMoisnMs(pNbMois)
{
return Math.trunc((pNbMois)*(1000*60*60*24*31))      
}
function conversionEnJour(pNbMillisec)
{
return Math.trunc((pNbMillisec)/(1000*60*60*24))      
}
function conversionJoursenMs(pNbJours)
{
return Math.trunc((pNbJours)*(1000*60*60*24))      
}
const birth = new Date(1756,0,27)

const death = new Date(1791,11,5)


let lifetime = (death - birth)
let nbAnnee = conversionEnAnnee(lifetime);
let nbMois = conversionEnMois(lifetime- conversionAnneeenMs(nbAnnee));
let nbJours =conversionEnJour(lifetime- conversionAnneeenMs(nbAnnee)- conversionMoisnMs(nbMois));


console.log('mozart est mort à ' + conversionEnAnnee(lifetime) + ' ans')
console.log(nbAnnee);
console.log(nbMois);
console.log(nbJours);
