// Урок 6. Встроенные объекты
// 1.
const str = 'js';
const upperStr = str.toUpperCase();
console.log(upperStr);

// 2.
function startsWith(arrayOfStrings, prefix) {
    const lowerPrefix = prefix.toLowerCase();
    return arrayOfStrings.filter(str => str.toLowerCase().startsWith(lowerPrefix));
}

const words = ["Apple", "Banana", "Apricot", "Avocado"];
const filteredWords = startsWith(words, "A");
console.log(filteredWords);




//  или
function filter(arr, str) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().startsWith(str.toLowerCase())) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(filter(['apple', 'banana', 'cherry', 'apricot', 'blueberry'], 'a'));

// или
function filter(arr, str) {
    return arr.filter(word => word.toLowerCase().startsWith(str.toLowerCase()));
}

console.log(filter(['apple', 'banana', 'cherry', 'apricot', 'blueberry'], 'a'));

// 3.
let num = 32.58884;
console.log(Math.floor(num));

let num = 32.58884;
console.log(Math.ceil(num));

let num = 32.58884;
console.log(Math.round(num));

// 4.
function randomNumber() {
    const number = Math.floor(Math.random() * 10) + 1;
    console.log(number);
}

randomNumber();

// 5.
function generateRandomArray(n) {
    if (!Number.isInteger(n)) throw new Error('Передаваемое значение должно быть целым числом');
    
    let length = Math.floor(n / 2); // длина нового массива вдвое короче исходного числа
    let result = [];

    for (let i = 0; i < length; i++) {
        // Генерация случайного числа от 0 до n (включительно)
        result.push(Math.floor(Math.random() * (n + 1)));
    }

    return result;
}

// Проверка функции
const inputNum = 10;
const outputArray = generateRandomArray(inputNum);
console.log(outputArray);

// 6.
function getRandomInRange(min, max) {
    // Гарантируем порядок min <= max
    if (min > max) {
        [min, max] = [max, min];
    }

    // Генерируем случайное число в диапазоне [min, max]
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Пример использования:
console.log(getRandomInRange(1, 10));  
console.log(getRandomInRange(-5, 5));
console.log(getRandomInRange(100, 200)); 

// 7.
const today = new Date(); // Текущая дата и время
const options = { year: 'numeric', month: 'long', day: 'numeric' };
console.log(today.toLocaleDateString('ru-RU', options));

// 8.
const currentDate = new Date();

// 2. Определение новой даты спустя 73 дня
const futureDate = new Date(currentDate.getTime());
futureDate.setDate(futureDate.getDate() + 73);

// 3. Форматирование и вывод будущей даты
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(`Через 73 дня будет ${futureDate.toLocaleDateString('ru-RU', options)}`);


// 9.
function formatDate(date) {
    const daysOfWeekRu = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const monthsRu = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];

    const day = date.getDate();          // День месяца
    const monthIndex = date.getMonth();  // Индекс месяца (0-11)
    const year = date.getFullYear();     // Год
    const hours = date.getHours();       // Часы
    const minutes = date.getMinutes();   // Минуты
    const seconds = date.getSeconds();   // Секунды
    const weekDayIndex = date.getDay();  // День недели (0-вск, 1-пн, ..., 6-сб)

    const formattedDate = `
Дата: ${day} ${monthsRu[monthIndex]} ${year} — это ${daysOfWeekRu[weekDayIndex]}.
Время: ${hours}:${minutes}:${seconds}`;

    return formattedDate.trim();
}

// Тестируем функцию
const testDate = new Date("2025-03-15T14:30:00");
console.log(formatDate(testDate));