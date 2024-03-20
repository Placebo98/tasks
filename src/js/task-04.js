// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueOnDisplay = document.querySelector("#value");

decrementBtn.addEventListener("click", () => {
  valueOnDisplay.textContent = counterValue -= 1;
});

incrementBtn.addEventListener("click", () => {
  valueOnDisplay.textContent = counterValue += 1;
});
