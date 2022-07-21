// const logMessage = () => {
//     console.log('Лог при виклику callback функції через 3 с');
// };
// console.log('до виклику setTimeout');

// setTimeout(() => {
//     console.log('Внутрішній callback для setTimeout');
// }, 2000);

// console.log('після виклику setTimeout');
// Приклад 2
// console.log('до виклику setTimeout');
// setTimeout(() => {
//     console.log('Виклик відкладеної функції 1');
// }, 5000);

// setTimeout(() => {
//     console.log('Виклик відкладеної функції 2');
// }, 2000);

// ____ПРИКЛАД МОДАЛКА ПІДПИСКИ НА РОЗСИЛКУ____
// ----проміжок час через який вилазить----
// const PROMPT_DELAY = 1000;
// // ---кількість разів, що виконується---
// const MAX_PROMPT_ATTEMPTS = 3;
// // ---спроба підписки, зробив чи ні----
// let promptCounter = 0;
// let hasSubscribed = false;

// const intervalId = setInterval(() => {
//     if (promptCounter === MAX_PROMPT_ATTEMPTS) {
//         console.log('Зупиняємо інтервал');
//         return;
//         clearInterval(intervalId);
//     }
//     console.log('Підписуйся на розсилку' + Date.now());
//     promptCounter += 1;
// }, PROMPT_DELAY);
import BSN from './node_modules/bootstrap.native';
const modal = new BSN.Modal("#exampleModal");
console.log(modal); 
modal.show();


