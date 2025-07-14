function startReverseGame() {
    const inputText = prompt("Введите текст, который хотите перевернуть:");

    if (inputText === null) {
        alert("Игра отменена.");
        return;
    }

    if (inputText.trim() === "") {
        alert("Пожалуйста, введите текст.");
        return;
    }

    const reversedText = inputText.split('').reverse().join('');
    alert(`Перевёрнутый текст: ${reversedText}`); // Отладка

}