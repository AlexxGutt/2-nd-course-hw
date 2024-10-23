// Task - 1

for (let a = 0; a < 2; a++) {
    console.log(`Привет!`);
}

// Task - 2
for (let b = 1; b <= 5; b++) {
    console.log(b);
}

// Task - 3
for (let i = 7; i <= 22; i++) {
    console.log(i);
}

// Task - 4
const obj = {
    Коля : '200',
    Вася : '300',
    Петя : '400'
}

for (const key in obj) {
    console.log(`${key} - ${obj[key]} доллларов`);
}

// Task - 5
let n = 1000;
let num = 0;
while (n >= 50) {
    n /= 2;
    console.log(n);
    num++;
}
console.log(`Количество итераций ${num}`);

// Task - 6
let dayFriday = 5;
let mounth = 31;

for (let c = dayFriday; c <= mounth; c += 7) {
    console.log(`Сегодня пятница, ${c}-е число. Необходимо подготовить отчет.`);
}