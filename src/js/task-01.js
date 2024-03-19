// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

const list = document.querySelectorAll("li.item");

console.log("Number of catagories:", list.length);

list.forEach((element) => {
  console.log(element.querySelector("h2").textContent);
  console.log(
    element.querySelectorAll("li").length + " items in the category."
  );
});
