// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


const counterValue = document.querySelector('#value');
const incrementBtn = document.querySelector('[action="increment"]');
const decrementBtn = document.querySelector('[action="decrement"]');

let value = 0;


const increment = () => {
    value++;
    counterValue.textContent = value;
}


const decrement = () => {
    value--;
    counterValue.textContent = value;
}
    
    
incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);