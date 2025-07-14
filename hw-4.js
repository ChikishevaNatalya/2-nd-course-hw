// Урок 4. Функции
// Угодай число
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Основная функция игры
function startGame() {
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

// Запускаем игру
startGame();


1.
// Напишите функцию, которая возвращает меньшее из двух чисел.

// Например, из двух чисел — 8 и 4 — функция должна вернуть значение 4. 
// Если мы передаем два одинаковых значения, например 6 и 6,
//  то функция должна вернуть это значение (в данном случае — 6).


function findMin(a, b) {
    return Math.min(a, b);
}

console.log(findMin(8, 4));
console.log(findMin(6, 6));

// или

function findMin(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
console.log(findMin(8, 4));
console.log(findMin(6, 6));

// // 2. 
// // Напишите функцию, которая принимает число и возвращает:
// // строку 'Число четное', если число четное;
// // строку 'Число нечетное', если число нечетное.
// // Подсказка: четность проверяется с помощью условия n % 2 == 0.


function checkEvenOrOdd(n) {
    if (n % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}
console.log(checkEvenOrOdd(8));
console.log(checkEvenOrOdd(9));

// // или

const evenNum = n => n % 2 === 0 ? console.log("Четное число") : console.log("Число нечетное");

evenNum(4);
evenNum(13);

// // или

checkEvenOrOdd = function () {
    let n = Number(prompt("Введите любое число"));
    (n % 2 === 0) ? console.log("Четное число") : console.log("Число нечетное");
};
checkEvenOrOdd();


// // 3.
// // Напишите функцию, которая принимает параметром число и выводит в консоль квадрат этого числа.
// // Напишите функцию, которая принимает параметром число и возвращает квадрат
// //  этого числа значением — так, чтобы потом это значение можно было использовать.


function printSquare(num) {
    console.log(num ** 2);
}
printSquare(5);

// // или

function getSquare(num) {
    return num ** 2;
}

let squareResult = getSquare(5);
console.log(squareResult);


// или
const mult = (n) => (n ** 2);
console.log(mult(5));

// // 4.
// // Создайте функцию, которая:

// // Спрашивает у пользователя, сколько ему лет.
// // Если пользователь введет отрицательное число — выведет на экран 
// // 'Вы ввели неправильное значение'.
// // Если пользователь введет число от 0 до 12 — выведет на экран 'Привет, друг!'.
// // Если пользователь введет число больше или равно 13 — выведет на экран 'Добро пожаловать!'.
// // Подсказка: можете выполнить это задание с помощью оператора if else.



function askAge() {

    let age = Number(prompt("Сколько Вам лет?"));

    if (age < 0 || isNaN(age) === true) {
        alert("Вы ввели неправильное значение");
    } else if (age >= 0 && age <= 12) {
        alert("Привет, друг!");
    } else if (age >= 13) {
        alert("Добро пожаловать!");
    }
}
askAge();

// // 5. 
// // Напишите функцию, которая принимает на вход два числа, а далее следует алгоритму:

// // Проверяет, являются ли переданные параметры корректными числами.
// // Подсказка: используйте преобразование типов и isNaN().

// // Если нет — возвращает строку 'Одно или оба значения не являются числом'.
// // Если оба параметра — числа, то возвращает произведение данных чисел.


function multiplyIfValid(a, b) {

    if (isNaN(Number(a)) && isNaN(Number(b))) {
        return 'Одно или оба значения не являются числом';
    }

    return a * b;
}

console.log(multiplyIfValid(5, 10));
console.log(multiplyIfValid('abc', 5));
console.log(multiplyIfValid(7, 'hello'));
console.log(multiplyIfValid(-3, 8));


// // 6. 
// // Напишите функцию, которая выполняет следующий алгоритм:

// // Запрашивает у пользователя число.
// // Проверяет, является ли введенное значение числом.
// // Если значение не является числом, возвращает строку 'Переданный параметр не является числом'.
// // Если значение является числом, возвращает строку 'n в кубе равняется <получившееся значение>'
// // , где n — введенное число, а <получившееся значение> — число, возведенное в куб.
// // Проверьте работу функции с числами от 0 до 10.



function cubeNumber() {

    let number = +prompt("Введите число:");

    if (isNaN(number)) {
        return 'Переданный параметр не является числом';
    }

    let cubedValue = number ** 3;
    return `${number} в кубе равняется ${cubedValue}`;
}

for (let i = 0; i <= 10; i++) {
    console.log(cubeNumber(i));
}
// ИЛИ
function cubeValue() {
    const num = Number(prompt('Введите число:'));

    if (isNaN(num)) {
        return 'Переданный параметр не является числом';
    } else {
        return `${num} в кубе равняется ${Math.pow(num, 3)}`;
    }
}

for (let i = 0; i <= 10; i++) {
    console.log(cubeValue(i));
}
cubeNumber();

// // 7.
const circle1 = {
    radius: 5,

    getArea: function () {
        return Math.PI * this.radius ** 2;
    },

    getPerimeter: function () {
        return 2 * Math.PI * this.radius;
    }
};

const circle2 = {
    radius: 10,

    getArea: function () {
        return Math.PI * this.radius ** 2;
    },

    getPerimeter: function () {
        return 2 * Math.PI * this.radius;
    }
};


console.log(circle1.getArea());
console.log(circle1.getPerimeter());

console.log(circle2.getArea());
console.log(circle2.getPerimeter());



// или
function getArea() {
    return `Площадь круга равна: ${(Math.PI * this.radius ** 2).toFixed(2)}`;
}
function getPerimeter() {
    return `Периметр круга равен: ${(2 * Math.PI * this.radius).toFixed(2)}`;
}
const circle1 = {
    radius: 5,
    getArea: getArea,
    getPerimeter: getPerimeter,
}

const circle2 = {
    radius: 10,
    getArea: getArea,
    getPerimeter: getPerimeter,
};


console.log(circle1.getArea());
console.log(circle1.getPerimeter());

console.log(circle2.getArea());
console.log(circle2.getPerimeter());











// function showTextButton() {
//     alert('Работает script!');
// }
// function showTextButton() {
//     let userAnswer = prompt('Зимой и летом одним цветом?').toLowerCase(); // Привели к нижнему регистру сразу после получения ответа
//     if (userAnswer === 'елка') {
//         alert('Угадал');
//     } else {
//         alert('Не угадал');
//     }
// }
// function delMessage() {
//     if (confirm('Удалить сообщение?')) {
//         alert('Сообщение удалено');
//     } else {
//         alert('Сообщение не удалено');
//     }
// }

// function delMessage() {
//     let del = confirm('Удалить сообщение?');
//     del ? alert('Сообщение удалено') : alert('Сообщение не удалено');
// }