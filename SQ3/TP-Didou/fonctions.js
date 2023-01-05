function changerAnimal(event)
{
    console.log(event);
    console.log(event.srcElement);
    console.log(event.srcElement.id);
    console.log(event.srcElement.value);
    // 
    let image = document.querySelector( "#id_image");
    //
    image.src=event.srcElement.value
}