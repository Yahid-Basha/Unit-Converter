const toConvert = document.getElementById('inp-value');
console.log(toConvert.value);
const btn = document.getElementById('convert-btn');
const output = document.getElementsByClassName('results');

toConvert.addEventListener('keyup', (e) => {
    inMeterFeet(e.target.value);
    inLiterGallon(e.target.value);
    inKiloPound(e.target.value);
})

btn.addEventListener('click', () => {
  inMeterFeet(toConvert.value);
  inLiterGallon(toConvert.value);
  inKiloPound(toConvert.value);
})

function inMeterFeet(value){
    const feet = Number(value * 3.281).toFixed(3);
    const meters = Number(value / 3.281).toFixed(3);
    const sentence = `<p class="result" >${value} meters = ${feet} feet | ${value} feet = ${meters} meters </p>`
    output[0].innerHTML = sentence;
}
function inLiterGallon(value){
    const gallon = Number(value * 0.264).toFixed(3);
    const liter = Number(value / 0.264).toFixed(3);
    const sentence = `<p class="result" > ${value} liter = ${gallon} gallon | ${value} gallon = ${liter} liter </p>`
    output[1].innerHTML = sentence;
}
function inKiloPound(value){
    const pound = Number(value * 2.205).toFixed(3);
    const kilo = Number(value / 2.205).toFixed(3);
    const sentence = `<p class="result" > ${value} kilo = ${pound} pound | ${value} pound = ${kilo} kilo </p>`
    output[2].innerHTML = sentence;
}
