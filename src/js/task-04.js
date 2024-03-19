// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const incrementButton = document.querySelector('[data-action = "increment"]');
const decrementButton = document.querySelector("[data-action='decrement']");
const value = document.querySelector("#value");

console.log(incrementButton);
console.log(decrementButton);
console.log(value);

incrementButton.addEventListener("click", () => {
  value.textContent = counterValue += 1;
});

decrementButton.addEventListener("click", () => {
  value.textContent = counterValue -= 1;
});
