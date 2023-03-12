// Расположите заметку внутри элемента (абсолютное позиционирование)

// РЕШЕНИЕ
function positionAt(anchor, position, elem) {
  let coords = getCoords(anchor);

  switch (position) {
    case "top-out":
      elem.style.left = coords.left + "px";
      elem.style.top = coords.top - elem.offsetHeight + "px";
      break;

    case "right-out":
      elem.style.left = coords.left + anchor.offsetWidth + "px";
      elem.style.top = coords.top + "px";
      break;

    case "bottom-out":
      elem.style.left = coords.left + "px";
      elem.style.top = coords.top + anchor.offsetHeight + "px";
      break;

    case "top-in":
      elem.style.left = coords.left + "px";
      elem.style.top = coords.top + "px";
      break;

    case "right-in":
      elem.style.width = "150px";
      elem.style.left =
        coords.left + anchor.offsetWidth - elem.offsetWidth + "px";
      elem.style.top = coords.top + "px";
      break;

    case "bottom-in":
      elem.style.left = coords.left + "px";
      elem.style.top =
        coords.top + anchor.offsetHeight - elem.offsetHeight + "px";
      break;
  }
}
