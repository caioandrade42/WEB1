function someCarta(elem){
  if(elem.src !== "img/traseira1.jpg"){
      elem.src = "img/traseira1.jpg";
  }
}

function poeCarta(objArray,cartaBaixo) {
  for (let index = 0; index < objArray.length; index++) {
    if (objArray[index].src.endsWith("traseira1.jpg")) {
      objArray[index].src = cartaBaixo.src;
      return;      
    }
  }
}


export {someCarta, poeCarta};