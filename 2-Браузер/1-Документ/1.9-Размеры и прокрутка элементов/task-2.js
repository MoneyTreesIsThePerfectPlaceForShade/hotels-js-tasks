// Узнать ширину полосы прокрутки

// РЕШЕНИЕ
const div = document.createElement("div");

div.style.overflowY = "scroll";
div.style.width = "50px";
div.style.height = "50px";

document.body.append(div);
const scrollWidth = div.offsetWidth - div.clientWidth;

console.log(scrollWidth);
