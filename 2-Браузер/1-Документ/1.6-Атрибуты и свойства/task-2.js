// Сделайте все внешние ссылки оранжевыми, изменяя их свойство style.

// РЕШЕНИЕ
// коллекция ссылок
const links = document.querySelectorAll("a");

for (const link of links) {
  if (link.getAttribute("href") !== null) {
    if (
      link.getAttribute("href").includes("://") &&
      !link.getAttribute("href").startsWith("http://internal.com")
    ) {
      link.style.color = "orange";
    }
  }
}

// всё покрасило как надо
