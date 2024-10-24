// Задание - 1
let minSearch = (a, b) => { return (a - b) < 0 ? a : b; };
console.log(minSearch(4, 8));

// Задание - 2
let c = Number(prompt(`Введите число`));
function evenNumber(c) {
        if (c % 2 === 0) {
        return (`число четное`);
    }
    else {
        return (`число нечетное`);
    }
};
console.log(evenNumber(c));

// Задание - 3
let d = Number(prompt(`введите число`));
function squareNumber(d) {
    return d ** 2;
};
console.log(squareNumber(d));
d = squareNumber(d);

// Задание - 4
let userAge = Number(prompt(`Сколько Вам лет?`));
function userGreeting(userAge) {
        if (userAge >= 0 && userAge <= 12) {
            return (`Привет, друг!`);
        } else if (userAge >= 13) {
            return (`Добро пожаловать!`);
        } else {
            return (`Вы ввели неправильное значение!`);
        }
};
alert(userGreeting(userAge));

// Задание  - 5
