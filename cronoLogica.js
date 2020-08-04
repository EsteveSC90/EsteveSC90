//startCrono();

var min = 4;
var seg = 0;
var interval = 0;

//var temps = "";

/*function retornaMilisegons(){
    tornaSegons = min * 60
    tornaMilisegons = tornaSegons * 1000;

    return tornaMilisegons;
}*/

function retornaMilisegons() {
    if (min >= 0) {
        tornaSegonsDeHores = min * 60
        tornaMilisegonsDeMinuts = tornaSegonsDeHores * 1000;
    }

    if (seg >= 0) {
        tornaMilisegonsDeSegons = seg * 1000;
    }

    tornaMilisegons = tornaMilisegonsDeMinuts + tornaMilisegonsDeSegons;

    return tornaMilisegons;
}

function avansaCrono(){

        if(seg == 0 && min > 0){
            min--;
            seg = 60;
        }

        if(seg > 0){
            seg--;
        } else {
            seg = 0;
        }  

    document.getElementById("crono").innerHTML = min + ":" + seg; 

    


    /*temps = min + ":" + seg;

    return temps;*/
}



function startCrono() {

   interval = setInterval(avansaCrono, 1000);
   //clearInterval(interval);

}