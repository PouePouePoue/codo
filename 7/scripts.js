const buttonText = document.querySelector(".button-text");
const inputText = document.querySelector(".input-text");
const bodyBlock = document.querySelector(".body-block");

inputText.addEventListener('input',textInput);
buttonText.addEventListener('click',buttonTextClick);

function textInput(){
    buttonText.hidden = '' !== inputText.value ? false : true;
}

let count = 3;
function buttonTextClick(){
    console.log(count);
    if (count === 5) {
        document.querySelector('p').remove();
        count--;
    }
    let par = document.createElement('p');
    par.innerHTML = `<p> ${inputText.value} </p>`
    bodyBlock.append(par);
    count++;
}