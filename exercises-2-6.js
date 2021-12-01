//Exercise 1

var myName = "Bernard"

//Exercise 1a
if (myName === "Bernard") {
    console.log("Hello me!");
}
else {
    console.log("Hello stranger.");
}

//Exercise 1b
if (myName === "Bernard") {
    console.log("Hello me!");
}
else if (myName === "Lucas") {
    console.log("Hello bestie!");
}
else if (myName === "Márcia") {
    console.log("Olá minha sogra!");
}
else {
    console.log("Hello stranger.");
}

//Exercise 2
var time = new Date().getHours();
if (time < 10) {
    document.getElementById("demo").innerHTML = "Good morning";
}
else if (time < 20) {
    document.getElementById("demo").innerHTML - "Good day";
}
else {
    document.getElementById("demo").innerHTML = "Good night";
}