const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2 // номер правильного ответа
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

console.log(quiz.length);
function startQuiz() {
    for (let i = 0; i < quiz.length; i++) {
       let userAnswer = Number(prompt(`Напишите вариант ответа на вопрос: \n${quiz[i].question}\n\nВариант ответа: \n${quiz[i].options.join('\n')}`))
    }
}
console.log(startQuiz());