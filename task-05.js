// Напиши скрипт который, при наборе текста в инпуте input#name-input 
// (событие input), подставляет его текущее значение в span#name-output.
//  Если инпут пустой, в спане должна отображаться строка 'незнакомец'.


const input = document.querySelector('input');
const output = document.querySelector('#name-output');


const newInput = (word) => {
  const result = word.target.value.length > 0 ?
   output.textContent = word.target.value :
   output.textContent = 'незнакомец';
  
}



input.addEventListener('input', newInput);

