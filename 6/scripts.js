let diff = (a, b) => {
    return Math.abs(a - b);
};
console.log(diff(5, 10));

let isWord = (str) => {
    return (str.split(' ').length = 1) ? true : false;
};
console.log(isWord("Тестовая строка"));