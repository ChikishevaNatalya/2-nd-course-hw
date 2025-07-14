const options = ["камень", "ножницы", "бумага"];

function playRockPaperScissors() {
    // Запрашиваем выбор пользователя
    const userChoice = prompt("Выберите: камень, ножницы или бумага:");

    if (userChoice === null) {
        alert("Игра отменена.");
        return;
    }

    const normalizedUserChoice = userChoice.trim().toLowerCase();

    // Проверяем корректность ввода
    if (!options.includes(normalizedUserChoice)) {
        alert("Пожалуйста, выберите корректный вариант: камень, ножницы или бумага.");
        return;
    }

    // Генерируем случайный выбор компьютера
    const computerIndex = Math.floor(Math.random() * options.length);
    const computerChoice = options[computerIndex];

    // Определяем победителя
    let result;
    if (normalizedUserChoice === computerChoice) {
        result = "Ничья!";
    } else if (
        (normalizedUserChoice === "камень" && computerChoice === "ножницы") ||
        (normalizedUserChoice === "ножницы" && computerChoice === "бумага") ||
        (normalizedUserChoice === "бумага" && computerChoice === "камень")
    ) {
        result = "Вы победили!";
    } else {
        result = "Вы проиграли!";
    }

    // Выводим результат
    alert(
        `Ваш выбор: ${normalizedUserChoice}\n` +
        `Выбор компьютера: ${computerChoice}\n` +
        `Результат: ${result}`
    );
}

