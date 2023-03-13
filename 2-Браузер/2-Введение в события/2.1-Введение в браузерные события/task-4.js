// Передвиньте мяч по полю

// РЕШЕНИЕ
/*
CSS
    #field {
      width: 200px;
      height: 150px;
      border: 10px solid black;
      background-color: #00FF00;
      overflow: hidden;
      position:relative;
    }
    #ball{
      position:absolute;
      left: 0;
      top: 0;
      transition: all 0.5s;
    }
*/
const field = document.getElementById("field");

field.onclick = function (event) {
  let fieldCoords = this.getBoundingClientRect();
  let ballCoords = {
    top:
      event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
    left:
      event.clientX -
      fieldCoords.left -
      field.clientLeft -
      ball.clientWidth / 2,
  };

  if (ballCoords.top < 0) ballCoords.top = 0;
  if (ballCoords.left < 0) ballCoords.left = 0;
  if (ballCoords.left + ball.clientWidth > field.clientWidth) {
    ballCoords.left = field.clientWidth - ball.clientWidth;
  }
  if (ballCoords.top + ball.clientHeight > field.clientHeight) {
    ballCoords.top = field.clientHeight - ball.clientHeight;
  }

  ball.style.left = ballCoords.left + "px";
  ball.style.top = ballCoords.top + "px";
};
