// function hello()
// {
//     alert('Hello')
// }
//window.addEventListener('load',hello);
// window.addEventListener('load',()=>{
//     alert('Hello')
// });
// window.addEventListener('load',function()
// {
//     alert('alert')
// });
//$(document).ready(function(){alert('hello');})

/* en javascript avant cela donne
document.querySelector('a').style.color = "red";
document.querySelector('a').addEventListener('click',
function () { document.querySelector('a').style.css.color = "blue" })
    */
   
$('a').css('color', 'blue');
$('a').click(function () {
    $('a').fadeOut("slow", function () {
        // Animation complete
        console.log('fini');
    });
})
$("a").dblclick(function () {
    $("a").slideDown("slow", function () {
        // Animation complete.
    });
});