import {trocaImagem} from "./funcoes.js";

// function executora(f) {
//   f();
// }

// const minhaFuncao = function () {
//   alert('Executada 2');
// }

// executora(minhaFuncao);

// function executora(f) {
//   f();
// }

// const minhaFuncao = () =>{
//   alert('OLHA AQUI DOIDO');
// }

// executora(minhaFuncao);


// window.addEventListener('load' , ()=>{
//   alert('um dois tres quatro');
// })

const imgs = [
  document.getElementById('img01'),
  document.getElementById('img02'),
  document.getElementById('btn01')
];
// console.log(trocaImagem);
const btn01 = document.getElementById('btn01');

btn01.addEventListener('click' , () => {
  
  trocaImagem(imgs[0],imgs[1],imgs[2])
});