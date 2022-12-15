function afficherNombreRebour(pnombre) {
    let message = "";
    for (let i =pnombre; i >=1 ; i--) {
        message = message + i;
    }
return message;


}
let nombresaisi=parseInt(prompt ('saisissez un nombre'));
let resultatTexte=afficherNombreRebour(nombresaisi);
console.log(resultatTexte);