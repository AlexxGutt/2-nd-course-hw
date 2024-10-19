// Task - 1
let password = (`пароль`);
let userPassword = (prompt(`Введите пароль`));

if (password === userPassword) {
alert(`Пароль введен верно`);
} else {
alert(`Пароль введен неправильно`);     
}

// Task - 2
let c = 10;
if (c > 0 && c < 10) {
    console.log(`Верно`);
} else {
    console.log(`Неверно`)
}

// Task - 3
let d = 99
let e = 100

if (d > 100 || e > 100) {
    console.log(`Верно`);
} else {
    console.log(`Неверно`);
}

// Task - 4
let a = `2`;
let b = `3`;

console.log(Number(a) + Number(b));

// Task - 5

let monthNumber = Number(prompt(`Введите число месяца`));

switch(monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log(`Зимушка зима`);
        break;
    case 3:
    case 4:
    case 5:
        console.log(`Весна`);
        break;
    case 6:
    case 7:
    case 8:
        console.log(`Лето`);
        break;     
    case 9:
    case 10:
    case 11:
        console.log(`Осень`);
        break;
    default:
        console.log(`Число не соответствует месяцу года...`);
}

// Task - 6
let number = Number(prompt(`Пожалуйста, введите любое число`));
if (number % 2 === 0) {
    console.log(`Четное`);
} else {
    console.log(`Не четное`);
}

// Task - 7
let ios = 0;
let android = 1;
let clientOS = (prompt(`у Вас Android или iOS?`));
clientOS = clientOS.toLocaleLowerCase();
if (clientOS === 0) {
    console.log(`Установите версию приложения для iOS по ссылке`);
} else if (clientOS === 1) {
    console.log(`Установите версию приложения для Android по ссылке`);
} else {
    console.log(`У нас нет такой системы!`)
}

