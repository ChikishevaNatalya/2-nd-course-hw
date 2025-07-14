// Урок 7.Callback, setTimeout, setInterval
// 1.
/*С помощью метода массива sort отсортируйте массив people
 по возрастанию возраста и выведите результат в консоль.*/
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

// Колбэк для .sort(), сортирует по возрастающим возрастам
console.log(
    people.sort((a, b) => a.age - b.age)
);
// 2.
/*Реализуйте функцию filter, которая должна работать аналогично методу массива filter
. Возьмите за основу функцию map, которую мы реализовывали на уроке.

Чтобы из функции map сделать filter, нужно, в зависимости от результата вызова ruleFunction
, принимать решение о том, добавлять в результирующий массив очередной элемент или нет.*/

function isPositive(value) {
    return value >= 0;
}

// Проверяет, относится ли человек к мужскому полу
function isMale(person) {
    return person.gender === 'male';
}

// Наша собственная реализация filter
function filter(arr, ruleFunction) {
    let filteredArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
}

// Проверяем работу функции
console.log(filter([3, -4, 1, 9], isPositive));
// Output: [3, 1, 9]

const people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people, isMale));

// 3.
/*Напишите программу, которая на протяжении 30 секунд каждые 3 секунды будет выводить в консоль текущую дату. 
Последней строкой должно выводиться сообщение «30 секунд прошло».*/
const startTime = Date.now();

// Запускаем цикл вывода даты каждую третью секунду
const intervalId = setInterval(() => {
    // Текущая дата
    const now = new Date();
    const timeElapsed = Date.now() - startTime;

    // Форматируем дату и выводим в консоль
    console.log(`${now.toLocaleString()}`);

    // Через 30 секунд прекращаем выполнение цикла
    if (timeElapsed >= 30000) {
        clearInterval(intervalId);
        console.log('30 секунд прошло');
    }
}, 3000);

// 4.
/*Сейчас код ниже выводит в консоль «Привет, Глеб!» сразу после запуска.
Допишите функцию delayForSecond так, чтобы приветствие выводилось в консоль не сразу,
 а спустя 1 секунду. Используйте setTimeout.*/

function delayForSecond(callback) {
    // Задерживаем выполнение колбека на 1 секунду
    setTimeout(callback, 1000); // 1000 миллисекунд = 1 секунда
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
});


// 5.
/*Посмотрите код. В нём допущена ошибка, и он выводит сообщения не в том порядке:*/
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

// Правильно передаем функцию sayHi как колбэк
delayForSecond(() => sayHi('Глеб'));