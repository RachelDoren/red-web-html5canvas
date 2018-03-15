var canvas = document.querySelector("canvas");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

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



//recursive loop
var x = 200;
var y = 200;
var dx = 4; //velocity
var dy = 4;
var radius = 30
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    c.beginPath(); 
    c.arc(x, y, radius, 0, 2 * Math.PI, false);
    c.fill();
    c.strokeStyle = "red";
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