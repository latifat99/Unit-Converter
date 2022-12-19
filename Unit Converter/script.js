let input = document.getElementById("input");
const btn = document.getElementById("btn");
let meter = document.getElementById("met");
let vol = document.getElementById("vol");
let kilo = document.getElementById("kilo");
const meterToFeet = 3.281;
const litreToGallon = 0.264;
const kiloToPound = 2.204;

btn.addEventListener("click", function () {
  let baseValue = input.value;
  meter.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(
    3
  )} feet | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meter `;
  vol.textContent = `${baseValue} litres = ${(
    baseValue * litreToGallon
  ).toFixed(3)} gallons | ${baseValue} gallons = ${(
    baseValue / litreToGallon
  ).toFixed(3)} litres `;
  kilo.textContent = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(
    3
  )} pounds | ${baseValue} pounds = ${(baseValue / kiloToPound).toFixed(
    3
  )} kilos `;
});
