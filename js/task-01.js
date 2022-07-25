// Порахує і виведе в консоль кількість категорій в
// ul#categories, тобто елементів li.item.
// Для кожного
// элемента li.item у спику ul#categories, знайде і
// виведе в консоль текст заголовку елемента(тегу < h2 >)
// і кількість елементів в категорії(усіх < li >,
// вкладених в нього).

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
// elem.childNodes - псевдомасив, зберігає всі дочірні
// елементи, включно з текстовими.
// elem.children - псевдомасив, зберігає тільки дочірні
// вузли - елементи, тобто ті, що відповідають тегам.
const categoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesEl.length}`);

console.log(``);

const titlesEl = categoriesEl.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
  console.log(``);
});
