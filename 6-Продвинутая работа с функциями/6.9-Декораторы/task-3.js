/*
Результатом декоратора debounce(f, ms) должна быть обёртка, которая передаёт вызов f не более одного раза в ms миллисекунд. Другими словами, когда мы вызываем debounce, это гарантирует, что все остальные вызовы будут игнорироваться в течение ms.
*/

// РЕШЕНИЕ
function debounce(func, delay) {
  let isCooldown = false;

  return function () {
    if (isCooldown) return;

    func.apply(this, arguments);
    isCooldown = true;
    setTimeout(() => (isCooldown = false), delay);
  };
}
