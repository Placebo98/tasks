const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const elementsOfArr = ingredients.map((ingredient) => {
  const element = document.createElement("li");
  console.log(element);
  element.textContent = ingredient;
  element.className = "item";

  return element;
});

const list = document.querySelector("#ingredients");
console.log(list);

list.append(...elementsOfArr);
