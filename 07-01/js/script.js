

function getMunicipios(uf) {
  const cidade = document.getElementById('cidade');
  fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
  .then(response=>response.json())
  .then(response=>{
    console.log(response);
    for (let i = 0; i < response.length; i++) {
      const option = document.createElement('option');
      option.innerText = response[i].nome;
      option.value = response[i].nome;
      option.id = response[i].id;
      cidade.appendChild(option);      
    }
  })
}

const awaitMunicipios = async (uf) => {
  const res = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`);
  const data = await res.json();
  console.log(data);
    for (let i = 0; i < data.length; i++) {
      const option = document.createElement('option');
      option.innerText = data[i].nome;
      option.value = data[i].nome;
      option.id = data[i].id;
      cidade.appendChild(option);  
    }
}

const uf = document.querySelector('#estado');
const salvar = document.getElementById('salvar');
uf.addEventListener('input', function (e){
  console.log(cidade.length);
  let child = cidade.lastElementChild;
  while (child) {
    cidade.removeChild(child);
    child = cidade.lastElementChild;
  }
  console.log(uf.value.length);
  if(uf.value.length == 2){
    awaitMunicipios(uf.value);
  }
});