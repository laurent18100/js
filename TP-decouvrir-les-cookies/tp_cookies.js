
function DarkLightMode(pEvent)
{


    if (document.body.style.backgroundColor=="white")
        {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
        }
        else
        {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
        }
}
function Dark/light(pId)
{
    console.log('Dark/light:'+pId);
    let element = document.querySelector('#'+pId);
    element.style.display=="none"?element.style.display="block":element.style.display="none"
}
