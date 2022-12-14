/*exo 2 algo
lire nombreEtoiles
tantque nombreEtoiles <1 ou
 nombreEtoiles >10
ecrire"pas bon nombre etoiles"
lire nombreEtoiles
fin tantque
*/

/*exo 2 algo
faire
lire nombreEtoiles
si nombreEtoiles <1 ou
nombreEtoiles >10
alors
ecrire " mess erreur"
fin si
tantque nombreEtoiles <1 ou
nombreEtoiles >10
*/
// faire
let nombreEtoiles = 0;
do
{
// lire nombreEtoiles
 nombreEtoiles=prompt("saisir le nombres d'etoiles");
// si nombreEtoiles <1 ou nombreEtoiles >10
if ((nombreEtoiles < 1) || (nombreEtoiles > 10))
// alors
{console.log("le nombre d'etoiles est incorrect!");}
// ecrire " mess erreur"
// else
// {console.log("le nombre d'etoiles  correct");}

// fin si
}
while ((nombreEtoiles < 1) || (nombreEtoiles > 10))
// tantque nombreEtoiles <1 ou
// nombreEtoiles >10

let texteEtoiles="";
for(let i=1 ; i<=nombreEtoiles;i++){
    texteEtoiles=texteEtoiles + "*";
}
//alors afficher le nombre d'etoiles
console.log(texteEtoiles);