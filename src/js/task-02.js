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

const listUl = document.querySelector("#ingredients");

const arrOfIngredients = ingredients.map((ingredient) => {
  const elementOfList = document.createElement("li");

  elementOfList.textContent = ingredient;
  elementOfList.className = "item";

  console.log(elementOfList);
  return elementOfList;
});

listUl.append(...arrOfIngredients);
