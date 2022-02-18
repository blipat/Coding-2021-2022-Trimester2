var myArray = ["zane", 'lane', "dhane"];
myArray[0] = "Max BD";
myArray[1] = "Max R";
//console.log(myArray);
var newArray=["green", "black", "blue"];
newArray.pop();
newArray.push("russia", "cow turd");
var myString = newArray.join("-");
//console.log(newArray);
//console.log(myString);
function getFirstElement(anArray) {
    console.log(anArray[0]);
}
getFirstElement(myArray);
function getLastElement(anArray){
    var num = anArray.length;
    console.log(anArray[num-1]);
}
getLastElement(newArray);