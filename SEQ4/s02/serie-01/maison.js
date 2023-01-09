
class Maison
{
    numeroRUE= 0;
    typeVoie="";
    nomVoie="";
    codePostal= 0;
    ville="";
    constructor(pNumRue,pTypeVoie,pNomVoie,pCodePostal,pVille)
    {
        this.numeroRUE = pNumRue;
        this.typeVoie = pTypeVoie;
        this.nomVoie = pNomVoie;
        this.codePostal = pCodePostal;
        this.ville =pVille;
    }
    afficher()
    {
        console.log('wesh la zommé est à '+this.ville);
    }
}