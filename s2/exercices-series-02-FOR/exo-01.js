// déclaration et initialisation de la variable texte qui contient du texte
let texte = '';

for (let i = 1; i <=10; i++) {
   
    texte ="le nombre "+ i;
    if (i%2 == 0){
        texte += " est pair";
    }
    else
    {
        texte += " est impair";
    }
    console.log(texte); 
}

