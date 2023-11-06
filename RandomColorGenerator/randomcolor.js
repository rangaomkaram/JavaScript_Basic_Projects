// Generating Random color

function getRandomHexColor(){
let HEX = "0123456789ABCDEF";
let color = '#'
let hexLength = 6

for (let index = 0; index < hexLength ; index++) {
    color += HEX[Math.floor(Math.random() * 16)];
}
return color;
}

let intervalId;

const startColor = ()=>{
    if(!intervalId){
    intervalId = setInterval(changeBgColor, 1000); 
    }
}

function changeBgColor() {
    document.body.style.backgroundColor = getRandomHexColor();
  }

const stopColor = ()=>{
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector('#start').addEventListener('click',startColor)
document.querySelector("#stop").addEventListener('click',stopColor)

// Get Random Lightcolor 

