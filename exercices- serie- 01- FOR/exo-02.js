// déclaration et initialisation de la variable texte qui contient du texte
let texte = ' ';

for (let i = 9; i >= 0; i--) {
    // pour chaque valeur de -1 de 9 à 0, on concatène la valeur courante de i
    // i est ici transformé en texte et non traitée comme un nombre
    texte = texte + i;
}
// affichage de la valeur finale de texte : '9876543210'
console.log(texte); 
