function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Основная функция игры
function guessNumber() {
    // Генерируем случайное число от 1 до 100
    const secretNumber = randomNumber(1, 100);
    let tries = 0;

    // Запрашиваем у пользователя число
    do {
        let userGuess = prompt("Угадай число от 1 до 100:", "");
        tries++; // Считаем количество попыток

        // Проверяем корректность ввода
        if (userGuess === null || userGuess.trim() === "") {
            alert("Игру закрыли досрочно.");
            return;
        }

        userGuess = parseInt(userGuess, 10);

        if (isNaN(userGuess)) {
            alert("Ввод неверный. Повторите попытку.");
        
            continue;
        }

        // Сообщаем подсказку
        if (userGuess < secretNumber) {
            alert("Загаданное число больше.");
        } else if (userGuess > secretNumber) {
            alert("Загаданное число меньше.");
        } else {
            alert(`Вы победили! Число верно: ${secretNumber}\nКоличество попыток: ${tries}`);
            break;
        }
    } while (true);
}

