let longueur = prompt("saisissez un nombre pou la longueur");
let largeur = prompt("saisisez un nombre pour la largeur");

//let surface =prompt("la surface du rectangle est"this.longueur*this.largeur)
let rectangle = new Rectangle(longueur,largeur);
console.log(rectangle.calculerSurface());
console.log(rectangle.calculerPerimete());