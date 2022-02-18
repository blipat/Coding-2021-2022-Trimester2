//array is a just list of data types
var animalArray = ["lion", "lemur", "cat", "monkey", "koala"]; //square brackets denote an array
//items in an array are called elements and they are separated with a comma
console.log(animalArray);

var colorArray = ["cyan",
                    "orange",
                    "yellow",
                    "purple",
                    "black",
                    "blue"];
//console.log(colorArray);
/*console.log(animalArray[0]); //index notation gets an individual element from an array
console.log(animalArray[1]);
console.log(animalArray[2]);
console.log(animalArray[3]);
console.log(animalArray[4]);
console.log(animalArray.length); //.length returns the length of the array
console.log(animalArray.indexOf("cat")); //indexOf returns the index number of specific elements
console.log(animalArray.indexOf("koala"));*/

colorArray.push("red"); //.push() adds to the end of the array
console.log(colorArray);
colorArray.pop(); //.pop removes the element at the end of the array;
console.log(colorArray);

colorArray.unshift("green"); //.unshift adds to the beginning of the array
console.log(colorArray);
colorArray.shift(); //remove the element at the beginning of the array
console.log(colorArray);
colorArray[colorArray.indexOf("black")] = undefined;
//colorArray.splice(colorArray.indexOf("black"),1); //splice(index to start removing, how many element to remve)
console.log(colorArray);
colorArray.splice(4, 1, "violet"); 
console.log(colorArray);
var myString = "asher-max-umika-paul-jinu-max-lane";
console.log(myString);
var stringArray = myString.split("-");
console.log(stringArray);
var arrrayToString = colorArray.join(", ");
console.log(arrrayToString);