// Task - 1

let a = `js`;
console.log(a.toUpperCase());

// Task - 2

// Task - 3

let numberRoundUp = 32.58884;

console.log(Math.floor(numberRoundUp));
console.log(Math.ceil(numberRoundUp));
console.log(Math.round(numberRoundUp));

// Task - 4

console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));

// Task - 5

const randomNumb = Math.floor(Math.random() * 10) + 1;
console.log(randomNumb);

// Task - 6

let integer = Math.floor(Math.random() * 15) + 1;
let lengthArray = Math.round(integer / 2);
let newArr = [];

console.log(integer); //для проверки - целое число
console.log(lengthArray); //для проверки - длина массива 

for (let i = 0; i < lengthArray; i++) {
    newArr.push(Math.floor(Math.random() * integer));
}

console.log(newArr);

// Task - 7
