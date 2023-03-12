// сделать часы

let timerId;

const update = function () {
  const clock = document.querySelector(".clock");
  const date = new Date();

  const seconds = date.getSeconds();
  if (seconds < 10) seconds = "0" + seconds;
  clock.children[2].innerHTML = seconds;

  const minutes = date.getMinutes();
  if (minutes < 10) minutes = "0" + minutes;
  clock.children[1].innerHTML = minutes;

  const hours = date.getHours();
  if (hours < 10) hours = "0" + hours;
  clock.children[0].innerHTML = hours;
};

// для запуска и остановки часов
const clockStart = function () {
  if (!timerId) {
    timerId = setInterval(update, 1000);
  }
  update();
};

const clockStop = function () {
  clearInterval(timerId);
  timerId = null;
};
