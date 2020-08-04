
startCrono(); //Auría de treure el temps amb milisegons per pasarli al setTimeout();
setTimeout(mensaje, retornaMilisegons());


var ranNums = [];// omplim aquest array amb els numeros aleatoris

    

    aleatoriSenseRepetirDe100();

    var contador = 1;

        for(var i=0; i<100; i++){
        nodeTextButton = document.createTextNode(ranNums[i]);
        nodeButton = document.createElement("button");
        nodeButton.appendChild(nodeTextButton);
        nodeButton.setAttribute("id", i);
        nodeButton.setAttribute("type", "submit");
        nodeButton.setAttribute("class", "bloquejaNumero");
        nodeButton.setAttribute("name", "nom");
        

        document.body.appendChild(nodeButton);

        


    }


    for (let i = 1; i <=99; i++) {
        //alert(document.getElementById(contador));
        document.getElementById(i).onclick = function () { //així cada vegada que pitjo sum+1
            //console.log("prova2: "+document.getElementById(i).textContent);
            //alert("prova1: " + document.getElementById(1).textContent);

            //ALERTA ELS ALERTS TRAVEN EL TEMPS DEL COMPTADOR!!
        //alert("prova2: " + document.getElementById(i).textContent);
        if (contador == document.getElementById(i).textContent) {
            document.getElementById("mostraContador").innerHTML = contador;
            //aquestes dues linies seguents les e posat per mes fer - son opcionals perque quedi millor
            document.getElementById(i).disabled = true;
            document.getElementById(i).style.color = "red";
            document.getElementById(i).style.backgroundColor = "green";
            contador++;
            //console.log(contador);
        } else {
           //document.getElementsByTagName("bloquejaNumero").disabled = true;
           document.getElementsByName("nom").prop("disabled", true);

           //document.getElementById(i).disabled = true;
           clearInterval(interval); 
        }


    }

        




    }






/*function mensaje() {

   alert("El temps ja ha finalitzat");

}*/

function mensaje() {

    alert("El temps ja ha finalitzat.");
    //bloquejar botons
    for (let i = 0; i < 100; i++) {
        document.getElementById(i).disabled = true;
        
    }


}

function aleatoriSenseRepetirDe100(){

    var nums = []; //anirem buidant aquest array perque sols aparegui un numero d'aqui
    for (let i = 1; i <= 100; i++) {
        nums.push(i);
    }

    console.log("1: " + nums); //Aquí tenemos los numeros del array inicial con los 100 numeros
    console.log("2: " + ranNums); //Este en un principio esta vacio
    //var ranNums = []; // omplim aquest array amb els numeros aleatoris
    var i = nums.length;
    var j = 0;




    while (i--) {
        j = Math.floor(Math.random() * (i + 1));
        ranNums.push(nums[j]);
        nums.splice(j, 1);
        //console.log("provando como se eliminan aleatoriamente: " + nums);
        //console.log("provando como se insertan aleatoriamente: " + ranNums);
    }

    console.log("3:" + nums); //Aquí al final nums estara vacio, el cual los valores abran pasado de forama aleatoria en el otro array.
    console.log("4: " + ranNums); //aquí tendremos este array con los valores aleatorios.
    
  
    for (let i = 0; i < ranNums.length; i++) {
        //console.log(ranNums[i]);
        return ranNums;
        
    }


    
}
    





