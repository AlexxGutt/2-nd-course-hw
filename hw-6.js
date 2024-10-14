// Task - 1
let password = String(`пароль`);
let userPassword = String(prompt(`Введите пароль`));

if (password === userPassword) {
console.log(`Пароль введен верно`);
} else {
console.log(`Пароль введен неправильно`);     
}

// Task - 2
let c = 2;
if (c >= 0 && c <= 10) {
    console.log(`Верно`);
} else {
    console.log(`Неверно`)
}

// Task - 3
let d = 99
let e = 100

if (d >= 100 || e >= 100) {
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
    case 1:
        console.log(`Зимушка зима`);
        break;
    case 2:
        console.log(`Зимушка зима`);
        break;
    case 3:
        console.log(`Весна`);
        break;
    case 4:
        console.log(`Весна`);
        break;
    case 5:
        console.log(`Весна`);
        break;
    case 6:
        console.log(`Лето`);
        break;     
    case 7:
        console.log(`Лето`);
        break;
    case 8:
        console.log(`Лето`);
        break;
    case 9:
        console.log(`Осень`);
        break;  
    case 10:
        console.log(`Осень`);
        break;
    case 11:
        console.log(`Осень`);
        break;
    case 12:
        console.log(`Зимушка зима`);
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


