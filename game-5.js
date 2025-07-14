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

function startQuiz() {
    let score = 0;

    for (let i = 0; i < quiz.length; i++) {
        const question = quiz[i];
        const optionsText = question.options.join('\n');
        const userAnswer = prompt(`Вопрос ${i + 1}:\n${question.question}\n\n${optionsText}\n\nВведите номер вашего ответа:`);

        if (userAnswer === null) {
            alert("Игра отменена.");
            return;
        }

        const answer = parseInt(userAnswer);
        if (!isNaN(answer) && answer >= 1 && answer <= question.options.length) {
            if (answer === question.correctAnswer) {
                alert("Правильно!");
                score++;
            } else {
                alert(`Неверно! Правильный ответ: ${question.correctAnswer}`);
            }
        } else {
            alert("Пожалуйста, введите корректный номер ответа.");
        }
    }

    alert(`Вы ответили правильно на ${score} из ${quiz.length} вопросов!`);
}