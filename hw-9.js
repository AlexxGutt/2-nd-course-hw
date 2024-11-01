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

