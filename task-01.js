// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.

const liItems = document.querySelectorAll('li.item')
console.log(liItems);
console.log(`В списке ${liItems.length} категории.`);

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль 
// текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

liItems.forEach(el => {
    console.log(`Категория: ${el.querySelector('h2').textContent}`);
    console.log(`Количество элементов: ${el.querySelectorAll('li').length}`);
})



