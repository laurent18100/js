function afficherNombre(pnombre) {
    let message = "";
    for (let i =1; i <= pnombre; i++) {
        message = message + i;
    }
return message;


}
let nombresaisi=parseInt(prompt ('saisissez un nombre'));
let resultatTexte=afficherNombre(nombresaisi);
console.log(resultatTexte);
