function dollarVersEuro(pMontant) {
    return pMontant / 1.06;
}
function couronneVersEuro(pMontant) {
    return pMontant / 151.69;
}
function euroVersDollar(pMontant) {
    return pMontant * 1.06;
}
function euroVersCouronne(pMontant) {
    return pMontant * 151.69;
}

function convertir(event) {
    // récupération du montant de départ depuis le champ de saisie
    let montantDepart = document.querySelector('#montantDepart');
    // récupération du mchamp ou va être mis le résulat
    let montantFinal = document.querySelector('#resultat');

    let boutonMoneyDepart = document.querySelector('input[name=moneyDepart]:checked').value;
    console.log(boutonMoneyDepart);
    let boutonMoneyArrivee = document.querySelector('input[name=moneyDarrivee]:checked').value;
    console.log(boutonMoneyArrivee);
    let montantEuroIntermediaire = 0;
    let resultat = 0;
    // SI boutonMoneyDepart = dollars alors
    if (boutonMoneyDepart == "dollars") {
        // montantEuroIntermediaire <- montantDepart converti en euro depuis le dollars
        montantEuroIntermediaire = dollarVersEuro(montantDepart.value);
    }
    else
    // sinon
    {
        // si boutonMoneyDepart = couronne
        if (boutonMoneyDepart == "couronne") {
            // montantEuroIntermediaire <- montantDepart converti en euro depuis la courronne
            montantEuroIntermediaire = couronneVersEuro(montantDepart.value);
        }
        else
        // sinon
        {
            //montantEuroIntermediaire <- montantDepart
            montantEuroIntermediaire = montantDepart.value;
        }

        //FIN SI
    }

    // SI boutonMoneyArrivee = dollars alors
    if (boutonMoneyArrivee == "dollars") {
        // resultat <- montantEuroIntermediaire converti en dollars depuis l euro
        resultat = euroVersDollar(montantEuroIntermediaire);
    }
    else

        // sinon
        // si boutonMoneyArrivee = couronne 
        if (boutonMoneyArrivee == "couronne") {

            // resultat <- montantEuroIntermediaire converti depuis euro en courronne
            resultat = euroVersCouronne(montantEuroIntermediaire);
        }
        else
            // sinon
            resultat = montantEuroIntermediaire
    //resultat <- montantEuroIntermediaire

    //FIN SI

    montantFinal.value = resultat;
}