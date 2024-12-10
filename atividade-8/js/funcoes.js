

function someCarta(elem){

  if(elem.src !== "img/Carta-Costas.pgn"){
      elem.src = "img/Carta-Costas.pgn";
  }
}

function poeCarta(objArray,cartaBaixo) {
  for (let index = 0; index < objArray.length; index++) {
    if (objArray[index].src === "") {
      objArray[index].src = cartaBaixo.src;      
    }
  }
}


export {someCarta, poeCarta};