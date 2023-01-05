//changerAnimal
///declare la class animal
let buttons = document.querySelectorAll(".animal");
// for each?  permet d'exécuter une fonction donnée sur chaque élément du tableau de la class animal
// et donc les boutons "un chien,une chouette ect.."
buttons.forEach(button => {
    ///affiche l'image selectionner au click du bouton
    button.addEventListener( 'click', changerAnimal);
    
});
