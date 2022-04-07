'use strict';

// Методы массивов
/* 1. Метод filter(func)
- принимает на вход функцию, которая принимает на вход один аргумент и
  возвращает true или false
- метод возвращает новый массив (исходный массив не меняется)
- новый массив состоит из элементов исходного,
  которые прошли проверку переданной функцией
*/

// TODO 1: создать новый массив, который состоит только из svg изображений.
//  В решении использовать метод filter

let images = ["flowers.png", "cat.svg", "elephant.jpg", "tree.svg"];


// TODO 2: создать новый массив без элементов,
//  которые могут быть приведены в false. В решении использовать метод filter

let elements = [,"flowers.png", NaN, "cat.svg", null ,"elephant.jpg", 0, "", "tree.svg", false];

/* 2. Метод map(func)
- принимает на вход функцию, которая принимает на вход один аргумент и
  возвращает значение. Возвращаемое значение может быть любым
- метод возвращает новый массив (исходный массив не меняется)
- новый массив состоит из элементов исходного,
  которые были преобразованы переданной функцией
*/

// TODO 3: создать новый массив, в котором логины будут в верхнем регистре.
//  В решении использовать метод map

let logins = ["rewr", "nbwuergw", "cdwt", "bfey"];


// TODO 4: создать новый массив, в котором цены будут с учетом скидки в 10%,
//  к цене необходимо добавить символы ' р.'. В решении использовать метод map

let prices = [900, 3500, 10400, 750, 3600, 2100];


/* 3. Метод every(func)
- принимает на вход функцию, которая принимает на вход один аргумент и
  возвращает true или false.
- метод возвращает true, если ВСЕ элементы исходного массива
  прошли проверку переданной функцией
*/

// TODO 5: в html можно вывести только изображения с расширением svg.
//  Необходимо проверить, все ли изображения из массива pics подходят для вывода.
//  В решении использовать метод every. Информацию о массиве вывести в консоль

let pics = ["flowers.svg", "cat.svg", "elephant.svg", "tree.svg"];


// TODO 6: проверить, все ли значения в массиве попадают в диапазон от 18 до 35
//  В решении использовать метод every. Информацию о массиве вывести в консоль

let usersAges = [20, 33, 18, 37, 44, 21, 28, 34, 30];


/* 4. Метод some(func)
- принимает на вход функцию, которая принимает на вход один аргумент и
  возвращает true или false.
- метод возвращает true, если ХОТЯ БЫ ОДИН элементы исходного массива
  прошел проверку переданной функцией
*/

// TODO 7: группа может отправиться в поход, только есть в ней есть хотя бы
//  один человек старше 40 лет и нет ни одного человека младше 18.
//  В решении использовать методы some и every.
//  Информацию о том, можно ли группе пойти в поход вывести в консоль

let ages = [23, 21, 34, 18, 90, 44, 50];


/* 5. Метод foreach(func)
- принимает на вход функцию, которая принимает на вход три аргумента:
  элемент массива, индекс элемента, сам массив и ничего не возвращает
- метод используется для перебора массива
- имеет доступ к индексам
- позволяет изменять элементы текущего массива (новый массив не создается),
  переданной функцией
*/

// TODO 9: дан массив названий компаний-партнеров. Необходимо преобразовать
//  названия таким образом, чтобы первые и последние буквы были
//  в верхнем регистре, остальные в нижнем

let names = ["apPle", "MicROsoft", "Sony", "SumSuNG"];


/* 6. Метод sort(func)
- принимает на вход функцию, которая принимает на вход 2 аргумента и
  возвращает либо отрицательное число, либо положительное число, либо 0
function compare(a, b){
    if (a меньше b по некоторому критерию сортировки) return -1;
    if (a больше b по некоторому критерию сортировки) return 1;
    return 0; // a должно быть равным b
}
- метод используется для сортировки массива (меняется исходный массив)
*/

// TODO 10: дан массив температур, необходимо отсортировать его по убыванию

let temps = [307, 412, -11, -1402, 130, 225];


// TODO 12: дан массив, необходимо отсортировать его по возрастанию длин
//  вложенных массивов

let numbers = [
    [0, 89, 444, 512, 0, -33, 200, 15],
    [4, 89, 12, 0, -33],
    [14, 170, -330],
    [44, 2, 56, -88],
    [4, 89, 45, 12, 0, -33, 90],
    [5, -12, 87, 67, -22, 111]
];


// TODO 13: дан массив с названиями животных, отсортировать по алфавиту

let animals = ["кот", "слон", "жираф", "олень", "лев", "пума"];


// TODO 14: необходимо случайных образом изменить порядок элементов в массиве.
//  В решении использовать метод sort

let presents = ["книга", "ручка", "блокнот", "дождевик", "скрепки", "брелок"];


// TODO 15: создать массив из пересечений. В решении использовать методы filter + includes.
//  В итоге должен быть создан массив: ["Октябрь", "Май"]

let first = ["Апрель", "Июль", "Октябрь", "Май"],
    second = ["Май", "Январь", "Декабрь", "Октябрь"];


// TODO 16: дан массив температур. Необходимо выяснить, поднималась ли температура выше 500,
//  вывести информацию об этом в консоль. В решении использовать метод some
let temperatures = [
    [344, 241, 521, 344, 121],
    [111, 313, 351, 314],
    [134, 111, 452],
];
