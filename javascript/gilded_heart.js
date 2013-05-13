var canvas = document.getElementById("melody"); 
var ctx = canvas.getContext("2d");
var heart = new Image();

// function dish(fillStyle,fillRect) { 
//   var soothingColors = { 
//           cadetblue: "rgba(95,158,160,1)" 
//          ,orchid: "rgba(218,112,214,1)" 
//          ,steelblue: "rgba(70,130,130,1)" 
//          ,gold: "rgba(255,215,0.5)" 
//   };
//   for (var i = 1; i <= 10; i++) { 
//     ctx.fillStyle = soothingColors; 
//     ctx.fillRect(x,y,width,height);
//   }
// }

// var yPos = 0;
// var velocity = 0;
var yPos = canvas.height/2;
var velocity = -5;

function heartOnASpring() {
  // 1) clear canvas
  ctx.clearRect(0,0, canvas.width, canvas.height);
  // 2) draw pebblee
  renderGrid(10, "hsla(181,100%,47%,0.4)");
  legendText();
  numbers();

  yPos = yPos + velocity;
  var acceleration = (canvas.height/2 - yPos) * 0.001
  velocity = velocity + acceleration; 
//ctx.fillStyle = "cadetblue";
//  ctx.fillRect(canvas.width/2-300,yPos,14,7);
  ctx.drawImage(heart, canvas.width/2-300,yPos-50);

  ctx.fillStyle = "rgba(222,126,216,1)";
  //y-Position
  ctx.fillRect(canvas.width/2-150, canvas.height/2, 10, (yPos - canvas.height/2));

  //velocity
  ctx.fillRect(canvas.width/2-100, canvas.height/2, 10, 10*velocity);

  //acceleration
  ctx.fillRect(canvas.width/2-50, canvas.height/2, 10, 200*acceleration);
}

makeHeart();
function makeHeart() {
  // heart.onload = function() {
  // }
  heart.src = "gilded_heart.png";
}
function legendText() {
  var xPos = 500;
  var yPos = 120;
  ctx.fillStyle = "white";
  ctx.font = "28px fanwood";
  ctx.fillText("1.  Y-AXIS", xPos,yPos);
  ctx.fillText("2.  VELOCITY", xPos,yPos+40);
  ctx.fillText("3.  ACCELERATION", xPos,yPos+80);

}
function numbers() {
  var xPos = canvas.height/2
  var yPos =  canvas.width/2 - 150
  ctx.fillText("1.", xPos-25,yPos);
  ctx.fillText("2.", xPos+25,yPos);
  ctx.fillText("3.", xPos+75,yPos);
}


setInterval(heartOnASpring, 50);

function renderGrid(gridPixelSize, color) {
        ctx.strokeStyle = color;

        // horizontal grid lines
        for (var i = 0; i <= canvas.height/gridPixelSize; ++i) {
            ctx.lineWidth = (i % 10 === 0 ? 2.5 : 0.5);
            var y = i * gridPixelSize + .5;
            drawLine(0, y, canvas.width, y);
        }
        // vertical grid lines
        for (var j = 0; j <= canvas.width/gridPixelSize; ++j) {
            ctx.lineWidth = (j % 10 === 0 ? 2.5 : 0.5);
            var x = j * gridPixelSize + .5;
            drawLine(x, 0, x, canvas.height);
        }
    }

    function drawLine(x0, y0, x1, y1) {
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.lineTo(x1, y1);
        ctx.closePath();
        ctx.stroke();
    }


// yes!  but also... if i want to make more squares like that,
// i can use a loop and make the colors change too.

// function renderGrid(gridSize, color) {
//   ctx.save();
//   ctx.lineWidth = 0.4;
//   ctx.strokeStyle = color;
// 
//   // horrrizontalz
//   for (var i = 0; i < canvas.height; i = i + gridSize {
//     ctx.beginPath();
//     ctx.moveTo(0, i);
//     ctx.lineTo(canvas.width, i);
//     ctx.closePath();
//     ctx.stroke();
//   }
// 
//   // verticalz
//   for (k = 0; k < canvas.width; k = k + gridSize) {
//     ctx.beginPath();
//     ctx.moveTo(k, 0);
//     ctx.lineTo(k,canvas.height);
//     ctx.closePath();
//     ctx.stroke();
//   }
//   ctx.restore();
// }
// 
// renderGrid(10, "mediumaquamarine");
