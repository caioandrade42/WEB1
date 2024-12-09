

function trocaImagem(img1,img2,btn1) {
  if (img1.classList.contains('d-none')) {
    alert('opa')
    img1.classList.remove('d-none');
    img2.classList.add('d-none');
    btn1.classList.remove('btn-primary');
    btn1.classList.add('btn-success');
    return;
  }
  img1.classList.add('d-none');
  img1.classList.remove('d-none');
  btn1.classList.remove('btn-success');
  btn1.classList.add('btn-primary');
}

export{trocaImagem};