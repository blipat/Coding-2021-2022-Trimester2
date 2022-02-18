/*var numArray = [1, 2, 3, 4, 5, 6];
console.log(numArray);
numArray[0] = numArray[0] - 1; //first element has index 0
numArray[1] = numArray[1] - 1;
numArray[2] = numArray[2] - 1;
numArray[3] = numArray[3] - 1;
numArray[4] = numArray[4] - 1;
numArray[5] = numArray[5] - 1;
console.log(numArray);*/

var cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];
console.log(cargoHold);
cargoHold.splice(3, 0, "keys");
console.log(cargoHold);
cargoHold.splice(cargoHold.indexOf("instruction manual"), 1);
console.log(cargoHold);
cargoHold.splice(2, 3, "cat", "key fob", "string cheese");
console.log(cargoHold);