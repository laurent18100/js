	
let btn_Random = document.querySelector('#btn_Random');
btn_Random.addEventListener('click', random);
let btn_Couleur = document.querySelector('#btn_Couleur');
btn_Couleur.addEventListener('click', couleur);

 
function random() {
    console.log('random');
    document.body.style.background = "red";
   
  }


 
function couleur() {
 console.log('couleur');
    if ( document.body.style.backgroundColor == "white")
    {
        document.body.style.backgroundColor = "black";
    }
    else
    {
        document.body.style.backgroundColor = "white";
    }
       
   
  }