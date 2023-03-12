// Найдите координаты точек относительно окна браузера

// РЕШЕНИЕ
// Внешние углы
const coords = elem.getBoundingClientRect();
const angle1 = [coords.left, coords.top];
const angle2 = [coords.right, coords.bottom];
// Верхний левый внутренний угол
const angle3 = [coords.left + field.clientLeft, coords.top + field.clientTop];
// Нижний правый внутренний угол
const angle4 = [
  coords.left + elem.clientLeft + elem.clientWidth,
  coords.top + elem.clientTop + elem.clientHeight,
];
