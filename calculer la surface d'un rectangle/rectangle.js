
class Rectangle
{
   longueur="";
    largeur="";
    constructor(pLongueur="",pLargeur="")
    {
        this.longueur = parseInt(pLongueur);
        this.largeur = parseInt(pLargeur);
 
    }
    calculerSurface()
    {
        return this.longueur*this.largeur
    }
    calculerPerimete()
    {
        return (this.longueur+this.largeur)*2
    }
       
             
    afficher()
    {
        console.log('la longueur du rectangle est '+this.longueur+ ' la largeur du rectangle est'+this.largeur);
        console.log('la surface du rectangle est  '+this.surface+  'le perimetre du rectangle est '+ this.perimetre); 
    }
}