class Classe {
    intitule;
    dateDebut;
    dateFin;
    listeStagiaire;

    constructor(pIntitule = "", pDateDebut = "", pDateFin = "")
    {
        this.intitule = pIntitule;
        
        this.dateDebut =pDateDebut;
        this.dateFin= pDateFin;
        this.listeStagiaire = new Array();
      //  console.log(this.listeStagiaire);
    
      //  console.log(pDateDebut + pDateFin)
    }
    
   

ajouterStagiaire(pStagiaire)
{
    this.listeStagiaire.push(pStagiaire)
}

}
