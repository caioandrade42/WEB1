function ready(fn) {
  if (document.readyState !== 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function () {
  const h1 = document.getElementById("h1");
  h1.addEventListener("click", function () {
    alert('Fica Frio ai');
  });

  let a = 10;
  let b = 20.65;
  let c = false;
  let d = 'Gustavo';
  let e = [];
  let f = {};
  let g = "Luma";

  console.log(typeof a);
  console.log(typeof b);
  console.log(typeof c);
  console.log(typeof d);
  console.log(typeof e);
  console.log(typeof f);
  console.log(typeof g);

  const butao = document.getElementById("butao");
    butao.addEventListener("click",function () {
      butao.classList.add('preto');
      setTimeout(() => {
        butao.classList.remove('preto');  
    }, 100);
    alert('A:'+typeof a + ' B:' +typeof b + ' C:' + typeof c + ' D:' + typeof d + ' E:' + typeof f + ' F:' + typeof g);
    });    
  
});

function LetConstVar(c) {
  if (c) {
    var a = 10;
    console.log(a);
  }
  if (!c) {
    a = 20;
    console.log(a);
  }
}

function testeRepeticao() {
  const pessoas = {
    "Nome" : "Gustavo",
    "Idade" : 21,
    "cpf" : "123.456.789-01"
  };
  console.log(typeof pessoas);
  console.log(pessoas);
  console.log(pessoas.Nome);
  console.log(pessoas.Idade);
  console.log(pessoas.cpf);

}

function vetorRepete() {
  const tirulipa = ["Certo",4,{"Nome":"Caio","Idade":15,"Curioso":"Não"},false];
  for (let index = 0; index < tirulipa.length; index++) {
    const element = tirulipa[index];
    console.log(element);
  }
}

function vetorObjeto() {
  let feliz  = [
  {"Nome":"Joao",
    "Idade": 90
  },
  {"Nome":"Gustavo",
    "Idade": 83
  },
  {"Nome":"Lucas",
    "Idade": 55
  },
  {"Nome":"Jocieliton",
    "Idade": 17
  },
  ];
  for (let index = 0; index < feliz.length; index++) {
    const element = feliz[index];
    console.log('Nome:'+element.Nome);
    console.log('Idade:'+element.Idade);    
  }
}

function obejtoVetor() {
  let pessoa = {
    "Nome" : "Gustavo",
    "Idade" : 56,
    "Depentes" : ["Wanderlaine", "Gricelda", "Albetizer", "Varlésia"]
  }
  console.log(pessoa);
}