//saisir un nombre d'etoile
let nombreEtoiles = parseInt(prompt(" saissisez le nombre d'etoiles"));
//verifier qu'il est bien superieur ou egal a 1 et inferieur strictement a 11
//si le nombre est bien compris entre 1 et 10
if ((nombreEtoiles >= 1) && (nombreEtoiles <= 10)){
    let texteEtoiles="";
    for(let i=1 ; i<=nombreEtoiles;i++){
        texteEtoiles=texteEtoiles + "*";
    }
    //alors afficher le nombre d'etoiles
    console.log("le nombre d'etoiles  correct:");
    console.log(texteEtoiles);

}
else
    //sinon affiché le nombre d'etoiles pas correct
    console.log("le nombre d'etoiles pas correct");




