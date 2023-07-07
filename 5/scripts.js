let firstArray = [4, 20, 3, 41, 50, 2, 17, 8, 23, 10];

let sum = 0;
firstArray.forEach(element => {
    sum += element;
});
console.log(`Сумма элементов массива: ${sum}`);

let secondMassive = firstArray.map(element => {
    let newElement = element * 2;
    return newElement;
});
console.log(`Новый массив: ${secondMassive}`);
