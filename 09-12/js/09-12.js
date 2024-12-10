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


  const img01 = document.getElementById('img01')
  const img02 = document.getElementById('img02')
// console.log(trocaImagem);
console.log(typeof(img01));
btn01.addEventListener('click' , () => {
  console.log('clicou');
  trocaImagem(img01,img02);
});