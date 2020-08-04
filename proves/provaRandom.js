/*var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var ranNums = [];
var i = nums.length;
var j = 0;

console.log("1: " + nums); //Aquí tenemos los numeros
console.log("2: "+ ranNums);

while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    ranNums.push(nums[j]);
    nums.splice(j, 1);
    console.log("provando como se eliminan aleatoriamente: "+ nums);
    console.log("provando como se insertan aleatoriamente: "+ ranNums);
}

console.log("3:" + nums); //Aquí ya no tenemos los numeros del array, el array esta vacio.
console.log("4: " + ranNums);*/

// ------------------------------------------------------------------------------------------------------------- 

var nums = []; //anirem buidant aquest array perque sols aparegui un numero d'aqui
for (let i = 1; i <=100; i++) {
    nums.push(i);
}

console.log("1: " + nums); //Aquí tenemos los numeros del array inicial con los 100 numeros
console.log("2: " + ranNums); //Este en un principio esta vacio
var ranNums = []; // omplim aquest array amb els numeros aleatoris
var i = nums.length;
var j = 0;




while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    ranNums.push(nums[j]);
    nums.splice(j, 1);
    console.log("provando como se eliminan aleatoriamente: " + nums);
    console.log("provando como se insertan aleatoriamente: " + ranNums);
}

console.log("3:" + nums); //Aquí al final nums estara vacio, el cual los valores abran pasado de forama aleatoria en el otro array.
console.log("4: " + ranNums); //aquí tendremos este array con los valores aleatorios.


