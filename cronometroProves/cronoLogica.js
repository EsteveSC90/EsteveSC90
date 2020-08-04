startCrono();

var min = 4;
var seg = 0;



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
}



function startCrono() {

    setInterval(avansaCrono, 1000);

}