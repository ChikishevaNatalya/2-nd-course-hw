function startGame() {

    // Генерация случайной задачи
    const task = generateTask();
    const userAnswer = prompt(`Решите пример: ${task.question}`);

    if (userAnswer === null) {
        alert("Игра отменена.");
        return;
    }

    const normalizedUserAnswer = parseFloat(userAnswer.trim());

    if (isNaN(normalizedUserAnswer)) {
        alert("Пожалуйста, введите корректное число.");
        return;
    }

    if (normalizedUserAnswer === task.correctAnswer) {
        alert("Правильно! 🎉");
    } else {
        alert(`Ошибка. Правильный ответ: ${task.correctAnswer}`);
    }
}

function generateTask() {
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];

    let a, b;

    switch (operator) {
        case '+':
            a = Math.floor(Math.random() * 50);
            b = Math.floor(Math.random() * 50);
            break;
        case '-':
            a = Math.floor(Math.random() * 100);
            b = Math.floor(Math.random() * a); // a >= b
            break;
        case '*':
            a = Math.floor(Math.random() * 10);
            b = Math.floor(Math.random() * 10);
            break;
        case '/':
            b = Math.floor(Math.random() * 10) + 1; // b ≠ 0
            a = b * Math.floor(Math.random() * 10); // a % b === 0
            break;
    }

    const correctAnswer = eval(`${a} ${operator} ${b}`); // Вычисляем правильный ответ
    const question = `${a} ${operator} ${b}`;

    return { question, correctAnswer };
}