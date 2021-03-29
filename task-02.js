// Напиши скрипт, который для каждого элемента массива ingredients
// создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM-узлов используй document.createElement().


const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const ulIngredients = document.querySelector('#ingredients');

  const arrayIngredients = ingredients.map( food => {
    const liIngredients = document.createElement('li');
    liIngredients.textContent = food;
    return liIngredients;
  })

  ulIngredients.append(...arrayIngredients)