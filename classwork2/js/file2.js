'use strict';

// Циклы: while, do while, for

// цикл while
while (true) {
    /* тело цикла */
    let num = parseInt(prompt("Введите положительное число " +
        "или 0 для выхода"));
    /* переход текущего цикла на следующую итерацию */
    if (num < 0) continue;
    /* завершение работы текущего цикла */
    if (num === 0) break;
    console.log(`${num} * ${num} = ${num * num}`); // "3 * 3 = 9"
}

let start = 1, end = 12;

while (start <= end) {
    if (start % 2 === 0) console.log(start);
    start = start + 1;
}

// 2, 4, 6, 8, 10, 12

for (let x = 1, y = 12; x <= y; x = x + 1) {
    if (x % 2 === 0) console.log(x);
}

// for (;;) {} бесконечный цикл for
// for (инициализация переменных; условие; обновление значений переменных) {
//      тело цикла
// }
// условие выполняется перед каждой итерацией
// обновление значений переменных происходит после
// выполнения инструкций из тела цикла, до проверки условия
// инициализация переменных выполняется один раз, когда программа
// начинает выполнение цикла

// вывести в консоль все неотрицательные элементы последовательности
// 90 85 80 75 70 и тд

for (let x = 90; x >= 0; x = x - 5) {
    console.log(x);
}
// область видимость переменных, объявленных через let или const - { }

// вывести в консоль первые 20 элементов последовательности
// 2 4 6 8 10 12 14 16 18 20 22 24 26 и тд

for (let a = 2, i = 1; i <= 20; a = a + 2, i = i + 1) {
    console.log(a);
}

// операторы присваивания
// =
let num = 10;
num += 10; // num = num + 10 = 20
num -= 10; // num = num - 10 = 10
num %= 10; // num = num % 10 = 0
num /= 10; // num = num / 10 = 0
num *= 10; // num = num * 10 = 0
console.log(num); // 0

console.log(2 + 3);
console.log(num < 0 ? "отрицательное" : "возможно положительное");
// инкремент (++) увеличивает значение переменной на 1
let a = 3;
// постфиксная форма сначала возвращает текущее значение,
// потом увеличивает на 1
console.log(a++); // 3
console.log(a); // 4

let b = 3;
// префиксная форма сначала увеличивает на 1
// потом возвращает значение
console.log(++b); // 4
console.log(b); // 4

// декремент (--) уменьшает значение переменной на 1
num = 7;
let res = num++ - num++ + num++ - --num; // -1
console.log(res);