import { someCarta, poeCarta } from "./funcoes.js";


const cartaCima1 = document.getElementById('cartaCima01');
const cartaCima2 = document.getElementById('cartaCima02');
const cartaCima3 = document.getElementById('cartaCima03');
const cartaBaixo01 = document.getElementById('cartaBaixo01');
const cartaBaixo02 = document.getElementById('cartaBaixo02');
const cartaBaixo03 = document.getElementById('cartaBaixo03');
const cartaBaixo04 = document.getElementById('cartaBaixo04');
const cartaBaixo05 = document.getElementById('cartaBaixo05');
const cartaBaixo07 = document.getElementById('cartaBaixo06');
const cartaBaixo06 = document.getElementById('cartaBaixo07');
const cartaBaixo08 = document.getElementById('cartaBaixo08');
const cartaBaixo09 = document.getElementById('cartaBaixo09');
const cartaBaixo10 = document.getElementById('cartaBaixo10');


let objArray = [cartaCima1,cartaCima2,cartaCima3];

cartaCima1.addEventListener("click", ()=>{
  someCarta(cartaCima1)
});

cartaBaixo01.addEventListener("click", () => {
  poeCarta(objArray,cartaBaixo01);
});

cartaCima2.addEventListener("click", ()=>{
  someCarta(cartaCima2)
});

cartaCima3.addEventListener("click", ()=>{
  someCarta(cartaCima3)
});



cartaBaixo02.addEventListener("click", () => {
  poeCarta(objArray, cartaBaixo02);
});

cartaBaixo03.addEventListener("click", () => {
  poeCarta(objArray, cartaBaixo03);
});

cartaBaixo04.addEventListener("click", () => {
  poeCarta(objArray, cartaBaixo04);
});

cartaBaixo05.addEventListener("click", () => {
  poeCarta(objArray, cartaBaixo05);
});

cartaBaixo06.addEventListener("click", () => {
  poeCarta(objArray, cartaBaixo06);
});

cartaBaixo07.addEventListener("click", () => {
  poeCarta(objArray, cartaBaixo07);
});

cartaBaixo08.addEventListener("click", () => {
  poeCarta(objArray, cartaBaixo08);
});

cartaBaixo09.addEventListener("click", () => {
  poeCarta(objArray, cartaBaixo09);
});

cartaBaixo10.addEventListener("click", () => {
  poeCarta(objArray, cartaBaixo10);
});