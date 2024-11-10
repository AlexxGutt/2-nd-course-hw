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
console.log(integer);
let lengthArray = Math.round(integer / 2);
console.log(lengthArray);
let newArr = [];
newArr.push(Math.floor(Math.random() * integer));
newArr.push(Math.floor(Math.random() * integer));
newArr.push(Math.floor(Math.random() * integer));
newArr.push(Math.floor(Math.random() * integer));

// function wholeNumber() {
//     for (let i = 0; i <= lengthArray; i++) {
//         newArr.push(Math.floor(Math.random() * integer));
//     }
// }
console.log(newArr);
for (let i = 0; i < 10; i++) {
    console.log(i);;
}