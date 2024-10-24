function guessTheNumber() {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    console.log(randomNum);
    let num = Number(prompt(`Угадайте число от 1 до 100`));

    if (isNaN(num) || num > 100 || num < 1) {
        alert(`Пожалуйста, введите число от 1 до 100`);
        } else if (num > randomNum) {
            alert(`Загаданное число меньше ${num}`);
        } else if (num < randomNum) {
            alert(`Загаданное число больше ${num}`);
        } else {
            alert(`Поздравляю! Вы угадали!`);
    }
};
