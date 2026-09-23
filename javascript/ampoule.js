function OnOffAmpoule(){
    let img= document.getElementById("imageampoule");
    if(img.src.search("bulbon")!= -1){
        img.src = "images/pic_bulboff.gif";
    }
    else { 
        img.src= "images/pic_bulbon.gif";
    }
}