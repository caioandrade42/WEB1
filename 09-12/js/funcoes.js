

function trocaImagem(img1,img2) {
  console.log(img2.classList.contains('d-none'));
    img1.classList.toggle('d-none');
    img2.classList.toggle('d-none');   
}
  

export {trocaImagem};