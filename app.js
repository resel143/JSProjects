let name = 'Selena';
console.log(name);

// global variables 

// get button 
const bgBtn = document.querySelector('#Changebg');
const textBtn = document.querySelector('#ChangeText');
const randBtn = document.querySelector('#Randomizer');

// get color display 
const BgColor = document.querySelector('#BgColor');
const TextColor = document.querySelector('#TextColor');
// get elements to be changed 

const body = document.querySelector('body');
const textAll = document.querySelectorAll('.text');

// add eventlisteners to elements to be changed 

bgBtn.addEventListener('click',changeBg);
textBtn.addEventListener('click',changeText);
randBtn.addEventListener('click',randomAll);

// create randomcolor function 
function RandomColor(){
    return Math.floor(Math.random()*255);
}
// create 3 random color function 
console.log(rgbColors());
function rgbColors(){
    const colo_01 = RandomColor();
    const colo_02 = RandomColor(); 
    const colo_03 = RandomColor(); 

    let colors = `rgb(${colo_01}, ${colo_02},${colo_03})`;
    return colors;
}


// change Bg-color Function 

function changeBg(){
    randomColor = rgbColors();
    body.style.backgroundColor = randomColor;
    BgColor.innerText= randomColor;
}
// change text color function 

function changeText(){
    randomColor = rgbColors();
    textAll.forEach(function (text){
        text.style.color = randomColor;
    });
    TextColor.innerText = randomColor;
    runAnimation();
}
// randomize all function 
function randomAll(){
    changeBg();
    changeText();
}
// run animation 

function runAnimation(){
    textAll.forEach(function(text){
        if(text.classList.contains('.text-anime')){
            text.classList.remove('text-anime');
        }
        else{
            text.classList.add('text-anime');
        }
    })
}