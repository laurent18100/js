// déclaration et initialisation de la variable texte qui contient du texte
let texte = '';
console.log((13 % 2)==0);
console.log((12 % 2)==0);
for (let i = 2; i <= 20; i++) {
    // pour chaque valeur de 2 de 2 à 20, on concatène la valeur courante de i
    // i est ici transformé en texte et non traitée comme un nombre
    if(i%2 == 0)
    // test de la parité: le reste de la division entière par 2 donne un reste = 0 (2/2=1 et il reste 0)
        {
            texte = texte + i+'-';
        }
}

// affichage de la valeur finale de texte : ' '
console.log(texte); 
