
class Vehicule
{
    marque="";
    modele ="";
    nombrePlaces = 0;
    constructor(pMarque="",pModele="",pNombrePlaces="")
    {
        this.marque = pMarque;
        this.modele = pModele;
        this.nombrePlaces = pNombrePlaces;
    }
    afficher()
    {
        console.log('weh la caisse est une '+this.modele);
    }
}