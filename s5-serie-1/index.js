function cacherImgHidden(event)
{
    // sur mouse Event :  event.srcElement
    event.srcElement.style.visibility="hidden";
}
function cacherImgNone(event)
{
    // sur mouse Event :  event.srcElement
    event.srcElement.style.display="none";
}
/*
let image1= document.querySelector('#image1');
image1.addEventListener('dblclick',cacherImg)
*/
let images =document.querySelectorAll('img');
// images.forEach(image=>{
//     image.addEventListener('click',cacherImgHidden);
// });
images.forEach(image=>{
    image.addEventListener('dblclick',cacherImgNone);
});

function cacherTout()
{
   // alert('youlou');
   let images = document.querySelectorAll('img');
   images.forEach(image =>{
    image.style.display="none";
   })
}

let boutonCacherTout = document.querySelector('#btn_cacher_tout');
boutonCacherTout.addEventListener('click',cacherTout);



function afficherTout()
{
    let images = document.querySelectorAll('img');
    images.forEach(image =>{
     image.style.display="block";
    })

}let boutonAfficherTout = document.querySelector('#btn_afficher_tout');
boutonAfficherTout.addEventListener('click',afficherTout);

function desactiverTout()
{
    let images = document.querySelectorAll('img');
    images.forEach(image =>{
        image.removeEventListener("dblclick",cacherImgNone);
    })

}
function activerTout()
{
    let images = document.querySelectorAll('img');
    images.forEach(image =>{
        image.addEventListener("dblclick",cacherImgNone);
    })

}

let boutondesactiverTout = document.querySelector('#btn_desactiver_tout');
boutondesactiverTout.addEventListener('click',desactiverTout);

let boutonactiverTout = document.querySelector('#btn_activer_tout');
boutonactiverTout.addEventListener('click',activerTout);

