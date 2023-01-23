class Stagiaire {
    nom = ("Aderson");
    prenom = ("Lucette");

    salutation() {
        return `je m'appelle ${this.prenom} ${this.nom}`;
    }
    constructor(pPrenom = "", pNom = "") {
        this.prenom = pPrenom;
        this.nom = pNom.toUpperCase();
    }
    afficher() {
        console.log(this.espece + this.nom);
    }
}

