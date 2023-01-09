class Personne {
    nom = "BRU)";
    prenom = "Thierry";

    constructor(pPrenom = "", pNom = "") {
        this.prenom = pPrenom;
        this.nom = pNom;
    }
    afficher()
    {
        console.log('la personne s appele'+this.prenom);
    }
}

