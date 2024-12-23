function adjustHeights() {
  const assistanceContents = document.querySelectorAll(".assistance__content");

  if (assistanceContents.length > 0) {
    // Скидаємо висоту перед обчисленням
    assistanceContents.forEach((el) => {
      el.style.height = "auto";
    });

    // Знаходимо максимальну висоту серед елементів
    let maxHeight = 0;
    assistanceContents.forEach((el) => {
      const elementHeight = el.offsetHeight; // Отримуємо висоту елемента
      if (elementHeight > maxHeight) {
        maxHeight = elementHeight;
      }
    });

    // Застосовуємо максимальну висоту до всіх елементів
    assistanceContents.forEach((el) => {
      el.style.height = `${maxHeight}px`;
    });
  }
}

// Викликаємо функцію при завантаженні сторінки
window.addEventListener("load", adjustHeights);

// Додаємо обробник для зміни розміру вікна
window.addEventListener("resize", adjustHeights);
