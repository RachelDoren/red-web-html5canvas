var canvas = document.querySelector("canvas");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

// // Rectangle
// c.fillStyle = "rgba(255, 0, 0, 1)";
// c.fillRect(100, 100, 100, 100)
// c.fillStyle = "rgba(200, 0, 0, 0.8)";
// c.fillRect(300, 100, 100, 100)
// c.fillStyle = "rgba(200, 0, 0, 0.6)";
// c.fillRect(500, 100, 100, 100)
// c.fillStyle = "rgba(200, 0, 0, 0.4)";
// c.fillRect(700, 100, 100, 100)

// //Line
// c.beginPath();
// c.moveTo(50, 200); // point one x , y coordinates
// c.lineTo(300, 300); //point two x , y coordinates
// c.lineTo(200, 50); // point three x , y coordinates
// c.lineTo(50, 200);
// c.strokeStyle = "blue";
// c.stroke();

// // Arc / Circle [order is important]
// for (var i =0; i < 3; i++) {
//  var x = Math.random() * window.innerWidth;
//  var y = Math.random() * window.innerHeight;
//  var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
//  c.beginPath(); //separates circle from other shapes
//  c.arc(x, y, 30, 0, 2 * Math.PI, false);
//  c.fillStyle = hue;
//  c.fill();
//  c.strokeStyle = hue;
//  c.stroke();
// }

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

var circle = new Circle(200,200, 3, 3, 70); //instantiate an object

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
