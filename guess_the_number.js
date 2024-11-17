const randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);

function guessTheNumber() {
    
    let num = Number(prompt(`Угадайте число от 1 до 100`));

    if (num === randomNum) {
        alert(`Поздравляю! Вы угадали!`);
        } else if (isNaN(num) || num > 100 || num < 1) {
            alert(`Введите число от 1 до 100!`);
            return (guessTheNumber());
        } else if (num > randomNum) {
            alert(`Введите число меньше ${num}`);
            return (guessTheNumber());
        } else if (num < randomNum) {
            alert(`Введите число больше ${num}`);
            return (guessTheNumber());
        }
};
