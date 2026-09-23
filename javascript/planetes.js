const TexteParDefaut = "MOUSE over the sun and the planets and see the different descriptions.";

function ecriretxt(txt, imagesSrc){
    document.getElementById("desc").innerHTML=txt;
    let imgAffichage = document.getElementById("planetImage");
    if (imagesSrc){
        imgAffichage.src= imagesSrc;
        imgAffichage.style.display="inline";
    }
    else {
        imgAffichage.src ="";
        imgAffichage.style.display= "none";

    }
}

function ecrireDefaut(){
    document.getElementById("desc").innerHTML = TexteParDefaut;
    let imgAffichage = document.getElementById("planetImage");
    imgAffichage.src = "";
    imgAffichage.style.display="none";
}