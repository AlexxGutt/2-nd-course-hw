// Task - 1

const newArr = [1, 5, 4, 10, 0, 3];
    for (let i = 0; i < newArr.length; i++) {
        console.log(newArr[i]);
        if (newArr[i] === 10) {
            break;
    }
};

// Task - 2 

const secondArr = [1, 5, 4, 10, 0, 3]
secondArr.forEach((el, index) => {
    if (el === 4) {
        console.log(index);
    }
});

// Task - 3

const thirdArr = [1, 3, 5, 10, 20]
let joinedNew = thirdArr.join(` `)
console.log(joinedNew);

// Task - 4

const oneArr = [];
for (let a = 0; a < 3; a++) {
    const twoArr = [];
    for (let a = 0; a < 3; a++) {
        twoArr.push(1);
    }
    oneArr.push(twoArr);
};
console.log(oneArr);

// Task - 5

const fourthArr = [1, 1, 1];
fourthArr.push(2, 2, 2);
console.log(fourthArr);

// Task - 6

const fifthArr = [9, 8, 7, 'a', 6, 5];
fifthArr.sort();
fifthArr.pop();
console.log(fifthArr);

// Task - 7

const sixthArr = [9, 8, 7, 6, 5];

const userNumber = Number(prompt(`Введите число`));
if (sixthArr.includes(userNumber)) {
    alert(`Вы угадали!`);
} else {
    alert(`Вы не удали!`)
};

// Task - 8

let text = `abcdef`;
text = text.split(``).reverse().join(``);
console.log(text);

// Task - 9

const seventhArr = [[1, 2, 3],[4, 5, 6]];
const spreadArr = [];

for (let b = 0; b < seventhArr.length; b++) {
    spreadArr.push(...seventhArr[b]);
}
console.log(spreadArr);

// Task - 10
const eighthArr = [2, 5, 1, 3, 4, 6, 8, 9, 7, 10];

for (let c = 0; c < eighthArr.length; c++) {
    if (eighthArr[c + 1]) {
        console.log(eighthArr[c] + eighthArr[c + 1]);
    }
};

// Task - 11

const ninthArr = [5, 6, 9];

function squareOfNumbers () {
    return ninthArr.map(newNinthArr => newNinthArr ** 2) ;
}

console.log(squareOfNumbers(ninthArr));

// Task - 12

function wordLength (tenthArr) {
    return tenthArr.map(newTenthArr => newTenthArr.length);
}

console.log(wordLength([`Это`, `Весьма`, `Непростая`, `Тема`]));

// Task - 13

function negativeNumbers(eleventhArr) {
    return eleventhArr.filter(h => h < 0);
}

console.log(negativeNumbers([1, 3, -10, 5, -8, 78, -61]));

// Task - 14

function randomNumber() {
    return Math.floor(Math.random() * 10);     
}

const twelfthArr = [];
for (let j = 0; j < 10; j++) {
    twelfthArr.push(randomNumber())   
}
console.log(twelfthArr);

const thirteenthArr = [];
for (let k = 0; k < twelfthArr.length; k++) {
    if (twelfthArr[k] % 2 === 0) {
        thirteenthArr.push(twelfthArr[k]);
    }
}
console.log(thirteenthArr);

// Task - 15

function randomNewNumber() {
    return Math.floor(Math.random() * 10);     
}

const fourteenthArr = [];
for (let l = 0; l < 6; l++) {
    fourteenthArr.push(randomNewNumber())   
}
console.log(fourteenthArr);
console.log(fourteenthArr.reduce((z, x) => z + x) / fourteenthArr.length);
