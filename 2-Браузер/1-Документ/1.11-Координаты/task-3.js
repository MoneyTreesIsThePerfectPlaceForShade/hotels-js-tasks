// Покажите заметку около элемента (абсолютное позиционирование)

// РЕШЕНИЕ
function positionAt(anchor, position, elem) {
  const coords = getCoords(anchor);

  switch (position) {
    case "top":
      elem.style.left = coords.left + "px";
      elem.style.top = coords.top - elem.offsetHeight + "px";
      break;

    case "right":
      elem.style.left = coords.left + anchor.offsetWidth + "px";
      elem.style.top = coords.top + "px";
      break;

    case "bottom":
      elem.style.left = coords.left + "px";
      elem.style.top = coords.top + anchor.offsetHeight + "px";
      break;
  }
}
