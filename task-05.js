// Напиши скрипт который, при наборе текста в инпуте input#name-input 
// (событие input), подставляет его текущее значение в span#name-output.
//  Если инпут пустой, в спане должна отображаться строка 'незнакомец'.


const input = document.querySelector('input');
const output = document.querySelector('#name-output');
const anonymous = 'прекрасный незнакомец!';
output.textContent = anonymous;

const newInput = (event) => {
  const result = event.target.value.length > 0 ?
   output.textContent = event.target.value :
   output.textContent = anonymous;
}



input.addEventListener('input', newInput);

