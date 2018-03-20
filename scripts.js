var canvas = document.querySelector("canvas");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function() {
    c.beginPath(); 
    c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    c.fill();
    c.strokeStyle = "white";
    c.stroke();
        }

    this.update = function() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
        this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.x - this.radius < 0) {
        this.dy = -this.dy
    }
    this.x+= this.dx
    this.y+= this.dy;

    this.draw();
    }
}

var circle = new Circle(200,200, .5, 1, 70); //instantiate an object

//recursive loop
var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = .5; //velocity
var dy = .5;
var radius = 70
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    circle.update();

    c.beginPath(); 
    c.arc(x, y, radius, 0, 2 * Math.PI, false);
    c.fill();
    c.strokeStyle = "white";
    c.stroke();

    if (x + radius > innerWidth || x - radius < 0) {
        dx = -dx;
    }
    if (y + radius > innerHeight || x - radius < 0) {
        dy = -dy
    }
    x+= dx
    y+= dy;
}

animate();
