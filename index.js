const readline = require('readline').createInterface({
input: process.stdin,
output: process.stdout
})

readline.question(`Введите элементы массива через пробел: `, (str) => {
console.log(`\nВаш массив: ${str}`)
const array = str.split(' ')
console.log(`\nДлина Вашего массива:`)
console.dir({ array, length: array.length });

console.log(`\nСоздадим второй массив: ['new', 1, 1, [10, [20, [30, [40]]]]]`);
const array_new = ['new', 1, 1, [10, [20, [30, [40]]]]];

console.log(`\nОбъединим оба массива и получим новый:`);
const array_concat = array.concat(array_new);
console.dir({ array, array_new, array_concat });

console.log(`\nВсе ли элементы нового массива больше 0?`);
console.dir(array_concat.every((x) => x > 0));

console.log(`\nЕсть ли в массиве элементы больше 0?`);
console.dir(array_concat.some((x) => x > 0));

console.log(`\nВыберем только чётные элементы:`);
console.dir(array_concat.filter((x) => !(x % 2)));

console.log(`\nНайдём первый положительный элемент:`);
console.dir(array_concat.find((x) => x > 0));

console.log(`\nВыпишем индекс первого положительного элемента:`);
console.dir(array_concat.findIndex((x) => x > 0));

console.log(`\nРаскроем первые внутренние скобки:`);
console.dir(array_concat.flat());

console.log(`\nРаскроем первые 2 внутренние скобки:`);
console.dir(array_concat.flat(2));

console.log(`\nПолностью раскроем скобки:`);
console.dir(array_concat.flat(Infinity));

console.log(`\nВключает ли массив элемент new:`);
console.dir(array_concat.includes('new'));

console.log(`\nВключает ли массив элемент 25:`);
console.dir(array_concat.includes(25));

console.log(`\nВыпишем индекс первого элемента 1:`);
console.dir(array_concat.indexOf(1));

console.log(`\nВыпишем индекс последнего элемента 1:`);
console.dir(array_concat.lastIndexOf(1));

console.log(`\nПреобразуем массив с строку:`);
console.dir(array_concat.join(', '));

console.log(`\nПеревернём массив и статичные последовательности разделим точкой с запятой:`);
console.dir(array_concat.reverse().join('; '));

console.log(`\nВыделим последний элемент массива:`);
const array_slice = array_concat.slice(-1);
console.dir({ array_concat, array_slice });

console.log(`\nСократим массив до пустого:`);
const array_splice = array_concat.splice(0);
console.dir({ array_concat, array_splice });

readline.close()
})