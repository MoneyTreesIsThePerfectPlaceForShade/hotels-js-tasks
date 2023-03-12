// Вставьте HTML в список

/*
<ul id="ul">
  <li id="one">1</li>
  <li id="two">4</li>
</ul>
*/

// РЕШЕНИЕ
const firstLI = document.getElementById("one");
const html = `<li>2</li><li>3</li>`;
firstLI.insertAdjacentElement("afterend", html);
