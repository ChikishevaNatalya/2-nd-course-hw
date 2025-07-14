// Урок 5. Массивы
// 1.
const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  if (arr[i] === 10) {
    break;
  }
}
// 2.
const arr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 4) {
    console.log(i);
    break;
  }
}


//  или
const arr = [1, 5, 4, 10, 0, 3];
const index = arr.indexOf(4);
console.log(index);

// 3.
const arr = [1, 3, 5, 10, 20];
const result = arr.join(' ');

console.log(result);

// 4.
const rows = 3;
const cols = 3;
const matrix = [];

let counter = 1; // Начнём счётчик с единицы

for (let i = 0; i < rows; i++) {
  const row = [];
  for (let j = 0; j < cols; j++) {
    row.push(counter); // Заполняем ячейки матрицы последовательными числами
  }
  matrix.push(row);
}

console.log(matrix);

// или
const arr = [];

for (let i = 0; i < 3; i++) {
  const arr2 = [];
  for (let j = 0; j < 3; j++) {
    arr2.push(1);
  }
  arr.push(arr2);
}

console.log(arr);

// 5. let arr = [1, 1, 1];
arr.push(2, 2, 2);
console.log(arr);

// или

let arr = [1, 1, 1];
arr = [...arr, 2, 2, 2];
console.log(arr);

// 6. 
let arr = [9, 8, 7, 'a', 6, 5];
arr = arr.filter(item => typeof item === 'number');
arr.sort((a, b) => a - b);
console.log(arr);


// 7.
const arr = [9, 8, 7, 6, 5];
const userInput = +prompt("Угадайте число:");

if (arr.includes(userInput)) {
  console.log("Угадал");
} else {
  console.log("Не угадал");
}

// 8. 
const str = 'abcdef';
const reversedStr = str.split('').reverse().join('');

console.log(reversedStr);

// 9.
const arr = [[1, 2, 3], [4, 5, 6]];
const result = [].concat(...arr);
console.log(result);

// или

const arr = [[1, 2, 3], [4, 5, 6]];
const result = [];
for (let i = 0; i < arr.length; i++) {
  result.push(...arr[i]);
}
console.log(result);

// или
const arr = [[1, 2, 3], [4, 5, 6]];
console.log([...arr].flat());

// 10.
const numbers = [3, 7, 2, 9, 5, 1, 8, 4, 6, 10];

for (let i = 0; i < numbers.length - 1; i++) {
  const sum = numbers[i] + numbers[i + 1];
  console.log(`Сумма ${numbers[i]} и ${numbers[i + 1]} равна ${sum}`);
}

// или
const arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 10) + 1);
}
console.log("Массив:", arr);

for (let i = 0; i < arr.length - 1; i++) {
  const sum = arr[i] + arr[i + 1];
  console.log(`Сумма элементов ${arr[i]} и ${arr[i + 1]}: ${sum}`);
}
// 11. 
function getSquareArray(arr) {
  return arr.map(num => num ** 2);
}
const numbers = [1, 2, 3, 4, 5];
const squares = getSquareArray(numbers);
console.log(squares);

//  или

function getSquareArray(arr) {
  return arr.map(num => num ** 2);
}
console.log(getSquareArray([1, 2, 3]));


// 12.
function getWordLengths(words) {
  return words.map(word => word.length);
}

const words = ["apple", "banana", "cherry"];
const lengths = getWordLengths(words);
console.log(lengths);

// или 

const arr = ['apple', 'peach', 'ice', 'water', 'websocket', 'me'];

function getArrLengths(arr) {
  const lengths = [];
  for (let i = 0; i < arr.length; i++) {
    lengths.push(arr[i].length);
  }
  return lengths;
}

const result = getArrLengths(arr);
console.log(result);



// 13. 
var myArray = [4, -5, 0, 2, -67, 8, 10, -34];

function getNegativeNumbers(array) {

  var negatives = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      negatives.push(array[i]);
    }
  }
  return negatives;

}
console.log(getNegativeNumbers(myArray));

// или

var myArray = [4, -5, 0, 2, -67, 8, 10, -34];

function getNegativeNumbers(array) {
  return array.filter(function (num) {
    return num < 0;
  });
}
console.log(getNegativeNumbers(myArray));

// 14.

const originalArray = [];
for (let i = 0; i < 10; i++) {
  const randomValue = Math.floor(Math.random() * 11);
  originalArray.push(randomValue);
}

const evenNumbers = originalArray.filter(num => num % 2 === 0);

console.log("Исходный массив:", originalArray);
console.log("Чётные значения:", evenNumbers);


// или

function randomNum() {
  return Math.floor(Math.random() * 10);
}

const arr = [];

for (let i = 0; i < 10; i++) {
  arr.push(randomNum());
}

console.log(arr); // выводим массив случайных чисел

const evenArr = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    evenArr.push(arr[i]);
  }
}
console.log(evenArr);

// 15.
const numbers = [];
for (let i = 0; i < 6; i++) {
  const randomValue = Math.floor(Math.random() * 10) + 1;
  numbers.push(randomValue);
}

const sum = numbers.reduce((acc, num) => acc + num, 0);


const average = sum / numbers.length;


console.log("Массив:", numbers);
console.log("Среднее арифметическое:", average);

// или

function randomNum() {
  return Math.floor(Math.random() * 10);
}

const arr = [];

for (let i = 0; i < 6; i++) {
  arr.push(randomNum());
}

console.log("Массив:", arr);

// Расчет суммы элементов массива
const sum = arr.reduce((acc, curr) => acc + curr, 0);

// Расчет среднего арифметического
const average = sum / arr.length;

console.log("Сумма элементов массива:", sum);
console.log("Среднее арифметическое:", average.toFixed(2));