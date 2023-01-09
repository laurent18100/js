
class Animal
{
   nom="";
    espece="";
    constructor(pNom="",pEspeces="")
    {
        this.nom = pNom;
        this.espece = pEspeces;
 
    }
    afficher()
    {
        console.log('le/la  '+this.espece+ ' s appelle '+this.nom);
    }
}