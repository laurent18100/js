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


let texteEtoiles="";
for(let i=1 ; i<=nombreEtoiles;i++){
    texteEtoiles=texteEtoiles + "*";
}
//alors afficher le nombre d'etoiles
console.log("le nombre d'etoiles  correct:");
console.log(texteEtoiles);