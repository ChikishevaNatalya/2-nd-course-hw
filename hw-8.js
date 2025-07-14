// Урок 7. DOM
// 1.
/*Задание 1. Скрытие и показ текста
Задача: cоздайте кнопку, которая будет скрывать и показывать текст в заголовке <h1>.

Инструкция:

В HTML создайте заголовок 
<h1>
 с текстом и кнопку.
Используйте метод 
querySelector
 для получения ссылок на заголовок и кнопку.
Используйте событие 
click
 и метод 
addEventListener
, чтобы скрывать и показывать заголовок при нажатии на кнопку.
Как должно работать: нажатие на кнопку «Скрыть» скрывает текст заголовка. Повторное нажатие показывает текст снова.*/

const title = document.querySelector("#mainTitle");
const toggleButton = document.querySelector(".text__button");

toggleButton.addEventListener("click", () => {
    if (title.style.display === "none") {
        title.style.display = "block";
        toggleButton.textContent = "Скрыть текст";
    } else {
        title.style.display = "none";
        toggleButton.textContent = "Показать текст";
    }
});


// 2.
/*Задание 2. Изменение стиля элемента
Задача: создайте кнопку, которая изменяет цвет текста в элементе <p>.

Инструкция:

В HTML создайте абзац <p> и кнопку. Используйте метод querySelector для получения 
ссылки на абзац и кнопку.Используйте событие click и метод addEventListener
, чтобы изменить стиль элемента, например его цвет.
Как должно работать: нажатие на кнопку «Изменить цвет» делает текст абзаца синим.*/


const paragraph = document.querySelector(".task_two p"); // Точный селектор
const colorButton = document.querySelector(".btn__color");

colorButton.addEventListener("click", () => {
    if (paragraph.style.color === "blue") {
        paragraph.style.color = "black"; // Возвращаем к оригинальному цвету
    } else {
        paragraph.style.color = "blue"; // Меняем на синий
    }
});



// 3.
/*Задача: создайте кнопку, которая меняет текст в заголовке <h1>.

Инструкция:

В HTML создайте заголовок <h1> с текстом и кнопку.Используйте метод querySelector для получения ссылки на заголовок и кнопку.
Используйте событие click и метод addEventListener, чтобы изменить текст заголовка при нажатии на кнопку.
Как должно работать: нажатие на кнопку «Изменить текст» меняет текст заголовка на «Привет, мир!».*/

const titleThree = document.querySelector(".task_three h1");
const buttonThree = document.querySelector(".btn__text");

buttonThree.addEventListener("click", () => {
    // Проверяем текущий текст и меняем его
    if (titleThree.textContent === "Здесь текст меняется") {
        titleThree.textContent = "Привет мир"; // Новый текст
    } else {
        titleThree.textContent = "Здесь текст меняется"; // Возвращаем старый текст
    }
});





// 4.
/*Задача: найдите все элементы с классом description и измените их текст на «Измененный текст».

Инструкция:

В HTML создайте несколько элементов с классом description.
Используйте метод querySelectorAll для поиска всех элементов с этим классом.
Переберите найденные элементы и измените их текстовое содержимое с помощью свойства textContent.
Как должно работать: 
после выполнения скрипта все элементы с классом description изменяют свой текст на «Измененный текст».*/

const quotes = [
    "«Каждое утро я просыпаюсь и смотрю список самых богатых людей Америки в журнале Forbes. Если меня там нет, я иду на работу.» — Роберт Орбен",
    "«Каждый может делать любое количество работы, если только это не та работа, которую он должен делать в данный момент.» — Роберт Бенчли",
    "«Работодатели наиболее счастливы по понедельникам. Сотрудники — по пятницам.» — Мококома Мохоноана"
];

// Получаем элементы
const buttonFour = document.querySelector(".btn__desc");
const descriptions = document.querySelectorAll(".description");

// Текущий индекс цитаты
let currentIndex = 0;

// Добавляем обработчик события
buttonFour.addEventListener("click", () => {
    // Обновляем индекс (цикл через 3)
    currentIndex = (currentIndex + 1) % quotes.length;

    // Применяем новую цитату ко всем элементам
    descriptions.forEach((element, index) => {
        const quoteIndex = (currentIndex + index) % quotes.length;
        element.textContent = quotes[quoteIndex];
    });
});






// 5.
/*Задача: создайте несколько элементов <p> с разными классами.
 Используйте querySelectorAll, чтобы найти все элементы с классом description 
и изменить их текст.

Инструкция:

В HTML создайте несколько абзацев <p>, некоторые из них должны иметь класс description.
Используйте querySelectorAll для поиска всех элементов с классом description.
Переберите найденные элементы и измените их текстовое содержимое.
Как должно работать: после выполнения скрипта все элементы с классом description
 изменяют свой текст на «Новый текст».*/

const quotesNew = [
    "«Если упорный труд — ключ к успеху, то большинство людей предпочло бы подобрать к этому замок.» — Клод Макдональд",
    "«Я выбираю ленивого человека для выполнения тяжелой работы. Потому что ленивый человек найдет легкий способ сделать ее». — Билл Гейтс",
    "«Когда я росла, я всегда хотела быть кем-то. Теперь я понимаю, что следовало бы быть более конкретной.» — Лили Томлин"
];

// Получаем кнопку и элементы
const buttonFive = document.querySelector(".btn__mixText");
const description = document.querySelectorAll(".description_t");

// Текущий индекс цикла
let currentInd = 0;

// Добавляем обработчик события
buttonFive.addEventListener("click", () => {
    // Обновляем индекс (цикл через 3)
    currentInd = (currentInd + 1) % quotesNew.length;

    // Присваиваем каждой description-последовательности уникальную цитату
    description.forEach((element, index) => {
        const quoteIndex = (currentInd + index) % quotesNew.length;
        element.textContent = quotesNew[quoteIndex];
    });
});







// 6.
/*Задача: создайте кнопку, которая добавляет новый элемент <p> с текстом в конец документа.

Инструкция:

В HTML создайте кнопку.Используйте метод createElement для создания нового элемента.
Используйте appendChild для добавления нового элемента в конец документа при
 нажатии на кнопку.
 Как должно работать: нажатие на кнопку «Добавить элемент» добавляет в конец 
 страницы новый абзац с текстом «Новый абзац».*/

const buttonQuote = document.querySelector(".btn__quote");

// Определяем контейнер для новых элементов
const container = document.getElementById("quoteContainer");

// Флаг: была ли уже добавлена цитата
let isQuoteAdded = false;

// Добавляем обработчик события
buttonQuote.addEventListener("click", () => {
    // Если цитата ещё не добавлена
    if (!isQuoteAdded) {
        // Создаём новый элемент <p>
        const newParagraph = document.createElement("p");

        // Устанавливаем текст (можно заменить на любую цитату)
        newParagraph.textContent = "Многим кажется, что Шерлок Холмс у Конан Дойла только и говорит, что «Элементарно, Ватсон!», «Какой же болван этот Лестрейд» и «А овсянка-то сегодня подгорела, миссис Хадсон» Нет, нет и опять нет. Если внимательно всмотреться в книги о Холмсе, можно заметить, что величайший сыщик не только рассуждает о свойствах табачного пепла и дедуктивном методе, но и делает тонкие замечания, полезные жителю Земли даже в XXI веке.";

        // Добавляем элемент в контейнер
        container.appendChild(newParagraph);

        // Меняем флаг: цитата добавлена
        isQuoteAdded = true;

        // Необязательно: меняем текст кнопки
        button.textContent = "Цитата добавлена";
    } else {
        alert("Цитата уже добавлена!");
    }
});




// 7.
/* В HTML создайте несколько абзацев <p>, некоторые из них должны иметь класс description.
Используйте метод querySelector для поиска первого элемента с классом description.
Используйте метод remove для удаления этого элемента при нажатии на кнопку.
Как должно работать: нажатие на кнопку «Удалить элемент» удаляет первый абзац с классом 
description со страницы.*/
const buttonRemover = document.querySelector(".btn__remover");

// Добавляем обработчик события
buttonRemover.addEventListener("click", () => {
    // Ищем первый элемент с классом description_l
    const firstDescription = document.querySelector(".description_l");

    // Проверяем, существует ли такой элемент
    if (firstDescription) {
        // Удаляем его
        firstDescription.remove();
    } else {
        alert("Элемент с классом description_l не найден!");
    }
});