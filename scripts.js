var canvas = document.querySelector("canvas");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

c.fillStyle = "rgba(255, 0, 0, 1)";
c.fillRect(100, 100, 100, 100)
c.fillStyle = "rgba(200, 0, 0, 0.8)";
c.fillRect(300, 100, 100, 100)
c.fillStyle = "rgba(200, 0, 0, 0.6)";
c.fillRect(500, 100, 100, 100)
c.fillStyle = "rgba(200, 0, 0, 0.4)";
c.fillRect(700, 100, 100, 100)

//Line
c.beginPath();
c.moveTo(50, 200); // point one x , y coordinates
c.lineTo(300, 300); //point two x , y coordinates
c.lineTo(200, 50); // point three x , y coordinates
c.lineTo(50, 200);
c.strokeStyle = "blue";
c.stroke();

// Arc / Circle [order is important]

c.beginPath(); //separates circle from other shapes
c.arc(200, 300, 30, 0, 2 * Math.PI, false);
c.fillStyle = "yellow";
c.fill();
c.strokeStyle = "yellow";
c.stroke();
