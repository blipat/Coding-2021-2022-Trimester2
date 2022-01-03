var canvas = document.getElementById("canvas");
var notepad = canvas.getContext("2d");

var counter = 0;

setInterval(function () {
    notepad.clearRect(0, 0, 500, 500);
    if ((counter%2)===0) {
        notepad.strokeRect(50, 50, 100, 20);
    }
    else {
        notepad.strokeRect(50, 50, 20, 100);
    }
    counter++;
}, 1000);
