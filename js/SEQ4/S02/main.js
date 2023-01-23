 //let stagiaire1 =['Martin','DUPONT'];
 //let stagiaire2 =['Vincent','MARTIN'];
// let stagiaires =[stagiaire1,stagiaire2];
//console.log(stagiaires);
//console.log(stagiaires[1][0]);

let stagiaireA = new Stagiaire("DUPONT","Martin");
stagiaireA.nom="DUPONT";
stagiaireA.prenom="Martin";
let stagiaireB = new Stagiaire("MARTIN","Vincent");
stagiaireB.nom="MARTIN";
stagiaireB.prenom="Vincent";
let stagiaires =[stagiaireA,stagiaireB];
console.log(stagiaireA,stagiaireB)
console.log(stagiaires[1].prenom);

console.log (stagiaires[0].salutation());

let anotherStagiaire=new Stagiaire("Lucette","Anderson");

console.log(anotherStagiaire);
let dateDebut = new Date(1977,10,24);
let dateFIN = new Date(1987,10,24);
let classe =new Classe(" devweb",dateDebut,dateFIN);

classe.ajouterStagiaire(stagiaireA);
classe.ajouterStagiaire(stagiaireB);
console.log(classe);

var stage ;
let CreerSage=

let ajouterStage=