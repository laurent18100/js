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