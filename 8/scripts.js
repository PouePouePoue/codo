const input = prompt("Enter date: DD.MM.YYYY");
const [day, month, year] = input.split('.');
const newDate = new Date(`${year}-${month}-${day}`);
const dayOfWeek = newDate.getDay();
let sdayOfWeek = dayOfWeekToString(dayOfWeek);
console.log(`День недели: ${sdayOfWeek}`);

function dayOfWeekToString(dayOfWeek){
    let sdayOfWeek ='';
    switch (dayOfWeek){
        case 0:
            sdayOfWeek = "Sunday";
            break;
        case 1:
            sdayOfWeek = "Monday";
            break;
        case 2:
            sdayOfWeek = "Tuesday";
            break;
        case 3:
            sdayOfWeek = "Wednesday";
            break;
        case 4:
            sdayOfWeek = "Thursday";
            break;
        case 5:
            sdayOfWeek = "Friday";
            break;
        case 6:
            sdayOfWeek = "Saturday";
            break;
    }
    return sdayOfWeek;
}

const dateNow = new Date();
console.log(`1: ${dateNow.getMinutes()} + 2: ${dateNow.getHours()}`);
const minutesNow = dateNow.getMinutes()+dateNow.getHours()*60;
console.log(`Прошло минут: ${minutesNow}`);