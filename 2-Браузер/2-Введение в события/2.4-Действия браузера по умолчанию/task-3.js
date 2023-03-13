// Создайте галерею изображений, в которой основное изображение изменяется при клике на уменьшенный вариант.

// РЕШЕНИЕ
const thumbs = document.querySelector("#thumbs");
// присваиваем новое значение сурсу
function changeThumbnail(href) {
  largeImg.src = href;
}
//
thumbs.addEventListener("click", function (e) {
  e.preventDefault();

  const thumbnail = e.target.closest("a");
  if (!thumbnail) return;
  changeThumbnail(thumbnail.href, thumbnail.title);
});
