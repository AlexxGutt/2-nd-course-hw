const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

function startQuiz() {
    
    let userAnswer = 0;
    let rightAnswer = 0;
    let result;

    for (let i = 0; i < quiz.length; i++) {
       userAnswer = Number(prompt(`Введите номер варианта ответа на вопрос: \n${quiz[i].question}\n\nВариант ответа: \n${quiz[i].options.join('\n')}`))
        if (userAnswer === quiz[i].correctAnswer) {
            rightAnswer++
        }
        if (rightAnswer > 1) {
            result = `вопроса`
        } else {
            result = `вопрос`
        }
    }
    return alert(`Викторина окончена!\nВы ответили правильно на ${rightAnswer} ${result}!`);
};