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
