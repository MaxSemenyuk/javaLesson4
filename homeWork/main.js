// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function squareRectangle(a, b) {
//     return a * b;
// }

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function squareCircle(radius) {
//     return
// }

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function squareCilinder(h, r) {
//     return
// }

// - створити функцію яка приймає масив та виводить кожен його елемент
// function array(arr) {
//     for (let arrElement of arr) {
//         console.log(arrElement);
//     }
// }

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function text(someText) {
//     console.log(`${someText}`)
// }

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function triLijechka(someText) {
//     document.write(`<ul>`)
//     document.write(`<li>${someText}</li>`)
//     document.write(`<li>${someText}</li>`)
//     document.write(`<li>${someText}</li>`)
//     document.write(`</ul>`)
// }

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function lijechka(numLi, someText) {
//     document.write(`<ul>`)
//     for (let i = 0; i < numLi; i++) {
//         document.write(`<li>${someText}</li>`)
//     }
//     document.write(`</li>`)
// }

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function array2(arr) {
//     document.write(`<ul>`)
//     for (let arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`)
//     }
//     document.write(`</ul>`)
// }

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// function array3(arr) {
//     for (const arrElement of arr) {
//         document.write(`<ul>`)
//         for (const arrElementKey in arrElement) {
//             document.write(`<li>${arrElementKey} ${arrElement[arrElementKey]}</li>`)
//         }
//         document.write(`</ul>`)
//     }
// }

// - створити функцію яка повертає найменьше число з масиву
// function lessNum(arr) {
//     let less = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < less) {
//             less = arr[i];
//         }
//     }
//     return less
// }

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function add(arr) {
//     let res = 0;
//     for (let i = 0; i < arr.length; i++) {
//         res = res + arr[i]
//     }
//     return res
// }
//
// let a = [1, 2, 3]
// console.log(add(a));