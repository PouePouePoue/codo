let a = 7;
let b = 5;
let c = 10;


let result = (Math.pow(a,2)+Math.pow(b,2)===Math.pow(c,2)) ? "Прямоугольный" : "Не прямоугольный";
console.log(result);


const input = +prompt("Введите R-адиус круга: ");
const circleLength = 2 * Math.PI * input;
const circleSquare = Math.PI * Math.pow(input,2);
console.log(`Площадь круга с радиусом ${Math.round(input)} равна: ${Math.round(circleSquare)}. Длина окружности равна: ${Math.round(circleLength)}`);
