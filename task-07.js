// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) 
// и изменяет инлайн-стиль span#text, обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.

const fontSizeInput = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

text.style.fontSize = '33px'

const fontSizeControl = (event) => {
    text.style.fontSize = `${event.target.value}px`
}


fontSizeInput.addEventListener('input', fontSizeControl)