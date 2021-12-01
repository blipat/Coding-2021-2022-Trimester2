function circle(x, y, radius, fillCircle) {
    notepad.beginPath();
    notepad.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        notepad.fill();
    }
    else {
        notepad.stroke();
    }
}

let ball = {
    x: 250,
    y: 250,
    xSpeed: -2,
    ySpeed: 3,
    draw: function() {
        circle(this.x, this.y, 5, true);
    },
    move: function() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    },
    checkCollision: function() {
        if (this.x < 0 || this.x > 500) {
            this.xSpeed = -this.xSpeed;
        }
        if (this.y < 0 || this.y > 500) {
            this.ySpeed = -this.ySpeed;
        }
    }
}

var canvas = document.getElementById("canvas");
var notepad = canvas.getContext("2d");
setInterval(function () {
    notepad.clearRect(0, 0, 500, 500);
    ball.draw();
    ball.move();
    ball.checkCollision();
    notepad.strokeRect(0, 0, 500, 500);
}, 30);
