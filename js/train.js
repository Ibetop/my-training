// /  Використовуючи if...else напиши код, який буде запитувати у користувача "Яка офіційна назва JavaScript?".
//    Якщо користувач вводить "ECMAScript", то показати за допомогою alert("Вірно!")
//    У інших випадках показати "Не знаєте? ECMAScript!"
// const message = prompt( "Яка офіційна назва JavaScript?");
// if (message.toLowerCase() === "ECMAScript".toLowerCase("ECMAScript")) {
//     alert("Вірно!");
// } else {
//     alert("Не знаєте?")
// }

//  Напишіть програму, яка отримає від користувача число(кількість хвилин)
// і виведе у консоль рядок у форматі годин та хвилин
// 70 === 01: 10
// 
// У консоль виведіть усі парні числа від min до max

// const max = 50;
// const min = 23;
// for (let i = min; i <= max; i += 1) {
// if (i % 2 === 0) {
//     console.log(i);
// }
// }

// За допомогою цикла for додайте всі парні числа від min до max

// const max = 50;
// const min = 0;
// let total = 0;
// for (let i = min; i <= max; i += 1) {
//     if (i % 2 === 0) {
//         total += i;
        
//     }
// }
// console.log(total)

// / При завантаженні сторінки користувачу пропонується у prompt ввести число.
//     Те, що вводить користувач, додається до значення змінної total.
// Операція вводу числа триває до тих пір, поки користувач не натисне кнопку Cancel в prompt.
// Після того, як користувач припинив вводити числа і натиснув на кнопку Cancel,
//     показувати alert з рядком "Загальна сума введених чисел дорівнює [число]."
// Робити перевірку, що користувач ввів саме число, а не довільні символи, не потрібно.
// let number = prompt('Ведіть число');
// let total = 0;
// let check = false;
// do {
// if (number) {
//     check = true;
//     total += Number(number);
//     number = prompt('Ведіть число');
// } else {
//     check = false;
//     alert(`Загальна сума введених чисел дорівнює ${total}.`)
// }
// } while (check);

//Напиши код, який буде запитувати логін за допомогою prompt та логувати результат у консоль браузера.
// Якщо користувач вводить "Адмін", то promt запитує пароль.Якщо нічого не введено або натиснута клавіша Esc,
//     вивести рядок "Відмінено"
//     У іншому випадку вивести рядок "Я вас не знаю!"

// Пароль перевіряти так:
// якщо введено пароль "Я головний", то вивести "Вітаю!",
//     у іншому випадку виводити рядок "Невірний пароль!".
// const login = prompt('Введіть логін');
// if (login === "Адмін") {
//     const pass = prompt("пароль");
//     if (pass === "Я головний") {
//         alert("Вітаю!");
//     } else {
//         alert("Невірний пароль!")
//     }
// } else if (login === null) {
//     alert("Відмінено");
// } else {
//     alert("Я вас не знаю!");
// }

//  Напиши цикл, який пропонує ввести число більше 100 через prompt.
// Якщо користувач ввів інше число - попросити ввести ще раз і так далі.
// Цикл повинен запитувати число, поки користувач не введе число більше 100,
//   або не натисне кнопку "Відміна" 
// const number = prompt('ввести число більше 100');
// // let check = true;
// while (number < 100) {
// //    if (number < 100) {
// //     alert("ввести ще раз")
// //    } 
// number = prompt('ввести число більше 100');
// } 
// console.log(number)

//Дано рядок, який складається із символів.Наприклад, 'abcde'.
//     Перевірте, що першим символом цього рядка є літера 'a'.
//  Якщо це так - вивести "так", у іншому випадку вивести "ні"

// const string = 'abcde'
// const string2 = 'bcde'
// function checkString(str, letter) {
//  if (str.indexOf(letter) === 0 ) {
//     return "таk"
//  } else {
//     return "ні";
//  }
 
// }
// console.log(checkString(string))

// Напишіть функцію, що прибирає значення, які повторюються
// Очікується[1, 2, 3, 1, 2] => [1, 2, 3]

// function deleteSameNumbers(arr) {
//     const array = [];
//     for (let i = 0; i < arr.length; i += 1 ) {
//         if (arr.indexOf(arr[i]) === i) {
//           array.push(arr[i])
//         }
//     }
//     return array
// }
// console.log(deleteSameNumbers([1, 2, 3, 1, 2]))
// Напишіть функцію, яка повертає новий масив без вказаних значень.Використовуйте примітиви
// Очікується [1, 2, 3, 1, 2] без 1, 2 => [3]

// function getArray(arr1, arr2) {
//     const array = [];
//     for (let i = 0; i < arr1.length; i += 1) {
//         if (!arr2.includes.(arr1[i])) {
//             array.push(arr1[i])
//         }
//     }
//     return array
// }
// console.log(getArray([1, 2, 3, 1, 2]));
// const playlist = {
//     name: 'Misha',
//     artist: 'Michael',
//     genre: 'pop',
//   changeNameOfMusic(newName) {
//         console.log('it is music by Misha :)');
//         this.name = newName;
//     },
//     updateGenre(newGenre) {
//       this.genre = newGenre;
//     },
// const mike = ['Mikel', 'Mike', 'MICHAEL', 'Misha', 'Mykhailo'];
// const nameToFind = 'MICHAEL';
// let message = "Такого ім'я не існує !!!";

// for (mik of mike) {

// if (mik === nameToFind) {
//   message = "Ім'я було знайденою вітаю !!!";
//   break;
// }
// }
// console.log(message)
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//    continue;
//   }

//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// const k = ['Mykhailo', 'Misha', 'Taras'];
// const m = ['Andrey', 'Maksym', 'Yura', 'Kolya', 'Dmytro', 'Vitaly'];
// const newArray = k.concat(m);
// console.log(newArray);

// function add() {
//   const a = 1;
// console.log(a);
// }
// add(1,3,4,5);

// const user1 = {
//   name: 'Mykhailo',
// }

// const user2 = Object.create(user1); 
// user2.height = 178;

// for(let key in user2) {
// if(user2.hasOwnProperty(key))
//   console.log(key)
//   console.log(user2[key]);
// }

// const users = {
//   pubg: 10,
//   csgo: 15,
//   minecraft: 5,
//   standof: 8, 
// }

// const m = {
//   name: 'Misha',
//   height: 178,
//   weight: 60,
// }

// const arrayM = m.name;
// console.log(arrayM)
// const products = [2, 3, 45, 50, 1];
// const product = [6];
// const newProducts = [...product, ...products];
// console.log(newProducts)
