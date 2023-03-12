// Создать уведомление

// РЕШЕНИЕ
function showNotification(top = 0, right = 0, className, html) {
  const notification = document.createElement("div");
  notification.className = "notification";

  notification.classList.add(className);

  notification.style.top = top + "px";
  notification.style.right = right + "px";

  notification.innerHTML = html;
  document.body.append(notification);

  setTimeout(() => notification.remove(), 1500);
}

showNotification(10, 10, "welcome", "Hello ");
