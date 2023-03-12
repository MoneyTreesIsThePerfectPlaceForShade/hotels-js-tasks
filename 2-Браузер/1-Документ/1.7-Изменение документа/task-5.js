// Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.

const data = {
  Рыбы: {
    форель: {},
    лосось: {},
  },

  Деревья: {
    Огромные: {
      секвойя: {},
      дуб: {},
    },
    Цветковые: {
      яблоня: {},
      магнолия: {},
    },
  },
};

// РЕШЕНИЕ
function createTree(cont, elem) {
  cont.innerHTML = createTreeText(elem);
}

function createTreeText(elem) {
  let ul;
  let li = "";
  for (let key in elem) {
    li += "<li>" + key + createTreeText(elem[key]) + "</li>";
  }
  if (li) {
    ul = "<ul>" + li + "</ul>";
  }
  return ul || "";
}

const container = document.getElementById("container");
createTree(container, data);
