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
let e = Number(prompt(`Введите первое число`));
let f = Number(prompt(`Введите второе число`));

function correctNumbers(e, f) {
        if (isNaN(e) || isNaN(f)) {
            return (`Одно или оба значения не являются числом`);
        } else {
            return e * f;
        }
}; 
console.log(correctNumbers(e, f));

// Задание - 6
let userNumberCub = Number(prompt(`Введите число`));

function cubedNumber (userNumberCub) {
        if (isNaN(userNumberCub)) {
            return (`Переданный параметр не является числом`);
        } else {
            return (userNumberCub ** 3);
        }
};
console.log(cubedNumber(userNumberCub));

// Задание - 7
function getCircleArea() {
    return this.radius ** 2 * 3.14;  
}

function getCirclePerimeter() {
    return this.radius * 3.14 * 2;
}

const circle1 = {
    radius: 15,
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
};

const circle2 = {
    radius: 5,
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());