//loops are control structures that allow us to repeat
//blocks of code as long as a certain condition remains true
var numArray = [1, 2, 3, 4, 5, 6];

//while loop
/*while(condition is true) {
    does code
}*/
var index = 0;
while(index <=5) {
    console.log(numArray[index]);
    index = index+1;
}

var ind = 0;
while(ind < numArray.length){
    numArray[ind] = numArray[ind] - 1;
    ind = ind + 1;
}
console.log(numArray);

var numSheep = 1;
while(numSheep < 64){
    console.log("I count " + numSheep + " sheep");
    numSheep++;
}

//for