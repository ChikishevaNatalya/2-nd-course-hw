function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Функция для смены фона в двух контейнерах
function changeBackgroundColor() {
    const gameContainer = document.getElementById("game_6");
    
    if (gameContainer) {
        gameContainer.style.backgroundColor = getRandomColor();
    }

}