// Task - 1

let a = `js`;
console.log(a.toUpperCase());

// Task - 2

function filterWords(strArr, str) {
    let resArray = [];
    for (i = 0; i < strArr.length; i++) {
        if (strArr[i].toLowerCase().startsWith(str.toLowerCase())) {
            resArray.push(strArr[i]);
        }
    }
    return resArray;
};

console.log(filterWords([`Комод`, `Кран`, `Кедр`, `Косынка`, `Кокос`], `ко`));

// Task - 3

let numberRoundUp = 32.58884;

console.log(Math.floor(numberRoundUp));
console.log(Math.ceil(numberRoundUp));
console.log(Math.round(numberRoundUp));

// Task - 4

console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));

// Task - 5

function randomNumb() {
    return Math.floor(Math.random() * 10) + 1;     
};

console.log(randomNumb());

// Task - 6

let integer = Math.floor(Math.random() * 15) + 1;
let lengthArray = Math.round(integer / 2);
let newArr = [];

console.log(integer); //для проверки - целое число
console.log(lengthArray); //для проверки - длина массива

function wholeNumber(newArr) {
    
    for (let i = 0; i < lengthArray; i++) {
        newArr.push(Math.floor(Math.random() * integer));
    }
    return newArr;
};

console.log(wholeNumber(newArr));

// Task - 7

let b = Math.floor(Math.random() * 100);
let c = Math.floor(Math.random() * 10);

console.log(b);
console.log(c);

function rangeNumber() {
    return Math.round(Math.random() * b) + c;
}
console.log(rangeNumber());

// Task - 8

console.log(new Date());

// Task - 9

const currentDate = new Date();

currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate);

// Task - 10
 const nowDate = new Date();
function showDate(nowDate) {
    const days = [`Воскресенье`, `Понедельник`, `Вторник`, `Среда`, `Четверг`, `Пятница`, `Суббота`];
    const months = [`Январь`, `Февраль`, `Март`, `Апрель`, `Май`, `Июнь`, `Июль`, `Август`, `Сентябрь`, `Октябрь`, `Ноябрь`, `Декабрь`];
    
    const day = nowDate.getDate();
    const month = nowDate.getMonth();
    const year = nowDate.getFullYear();
    const daysOfTheWeek = days[nowDate.getDay()];
    const hours = nowDate.getHours();
    const minutes = nowDate.getMinutes();
    const seconds = nowDate.getSeconds();

    return `
    Дата: ${day} ${months[month]} ${year} - это ${daysOfTheWeek};
    Время: ${hours}:${minutes}:${seconds};
    `
    // Дата: [число] [месяц на русском] [год] — это [день недели на русском].
    // Время: [часы]:[минуты]:[секунды]
};

console.log(showDate(nowDate));