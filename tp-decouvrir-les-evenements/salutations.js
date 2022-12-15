console.log("chargement salutation .js");




/*function saluer(event)
{
    // bloquer l'événement par défaut, on peut récupérer les informations de l'événement
    // grâce au paramètre event qui est rempli automatiquement par le listener.
    event.preventDefault();
    alert("AH UN CLICK SUR LE BOUTON !");
}
*/
/*function saluer(event)
{
    // bloquer l'événement par défaut, on peut récupérer les informations de l'événement
    // grâce au paramètre event qui est rempli automatiquement par le listener.
    event.preventDefault();
    // récupération de la valeur des champs de saisie.
    let prenom = document.querySelector('#prenom').value;
    let nom = document.querySelector('#nom').value;
    // construction du message
    let message = `Bonjour ${prenom} ${nom}`;
    //alert("AH UN CLICK SUR LE BOUTON !");
    alert(message);
}
*/
/*function saluer(event)
{
    // bloquer l'événement par défaut, on peut récupérer les informations de l'événement
    // grâce au paramètre event qui est rempli automatiquement par le listener.
    event.preventDefault();
    // récupération de la valeur des champs de saisie.
    let prenom = document.querySelector('#prenom').value;
    let nom = document.querySelector('#nom').value;
    // construction du message
    let message="";
    if (prenom.length==0 && nom.length==0)
        message ="Bonjour, illustre inconnu(e)";
        else
        message = `Bonjour ${prenom} ${nom}`;
    //alert("AH UN CLICK SUR LE BOUTON !");
    alert(message);
}
*/
function saluer(event) {
    

    // bloquer l'événement par défaut, on peut récupérer les informations de l'événement
    // grâce au paramètre event qui est rempli automatiquement par le listener.
    event.preventDefault();
    // récupération de la valeur des champs de saisie.
    let prenom = document.querySelector('#prenom').value;
    let nom = document.querySelector('#nom').value;
    // construction du message
    let message="";
    if (prenom.length==0 && nom.length==0)
        message ="Bonjour, illustre inconnu(e)";
        else
        message = `Bonjour ${prenom} ${nom}`;
    //alert("AH UN CLICK SUR LE BOUTON !");
    alert(message);


    
   
    let race = document.querySelector('#race').value;
    let emote = "";
    switch (race) {
        case 'elf':
            emote = emoteElfe();
            break;
        case 'ork':
            emote = emoteOrque();
            break;

        default:
            emote = emoteHumain();
            break;
    }
    alert(emote);
    let rang = document.querySelector('input[name=rank]:checked').value;
    let emoterang = "";
    console.log(rang);
    switch (rang) {
        case 'roturier':
            emoterang = emoteRoturier();
            break;
        case 'noble':
            emoterang = emoteNoble();
            break;

        default:
            emoterang = emoteRoyaute();
            break;
    }
    alert(emoterang);
}


function emoteHumain()
{
    return "l'ordinateur observe la personne qui approche.";
}
function emoteElfe()
{
    return "l'ordinateur observe la personne, totalement subjugé par la grâce elfique.";
}
function emoteOrque()
{
    return "l'ordinateur observe la personne difforme et repoussante, plissant le nez.";
}
function emoteRoturier()
{
    return "le garde fait un signe de tete.";
}
function emoteNoble()
{
    return "le garde s'incline.";
}
function emoteRoyaute()
{
    return "tous le monde s'incline pour la royauté.";
}



