let formateur = new Personne('BRU','Thierry');
let chatFormateur = new Animal ('Arwen','chat');
let vehiculeFormateur = new Vehicule('ninebot','NavBOT G30MAX','1');
let domicileFormateur = new Maison(1,'rue','du paradis','18999','Las Angelos');


formateur.afficher()
chatFormateur.afficher()
vehiculeFormateur.afficher()
domicileFormateur.afficher()


let personne = new Personne()
personne.nom="BRU" ;
personne.prenom="Thierry";

console.log(personne.nom);
console.log(personne.prenom);