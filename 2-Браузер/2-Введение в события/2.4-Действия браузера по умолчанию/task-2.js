// Сделайте так, чтобы при клике на ссылки внутри элемента id="contents" пользователю выводился вопрос о том, действительно ли он хочет покинуть страницу, и если он не хочет, то прерывать переход по ссылке.

// РЕШЕНИЕ
const contents = document.querySelector("#contents");
contents.onclick = function (event) {
  function handleLink(href) {
    const isLeaving = confirm(`Вы хотите перейти по ссылке ${href}?`);
    if (!isLeaving) return false;
  }
  const target = event.target.closest("a");
  if (target && contents.contains(target)) {
    return handleLink(target.getAttribute("href"));
  }
};
