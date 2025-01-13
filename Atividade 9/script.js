
function criaLinha(event){
  event.preventDefault();
  const corpoTabela = document.getElementById('corpo_tabela');
  const nome = document.getElementById('nome');
  const email = document.getElementById('email');
  const tel = document.getElementById('telefone');
  const cpf = document.getElementById('cpf');
  const dataNasc = document.getElementById('dataNasc');
  const tr = document.createElement('tr');
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');
  const td3 = document.createElement('td');
  const td4 = document.createElement('td');
  const td5 = document.createElement('td');
  const td6 = document.createElement('td');
  const btEx = document.createElement('button');
  btEx.innerText = 'Excluir';
  btEx.classList.add('btn');
  btEx.classList.add('btn-danger');
  btEx.setAttribute('texto', iptNome.value);
  btEx.addEventListener('click', excluirLinha);
  td1.innerText = nome.value;
  td2.innerText = email.value;
  td3.innerText = tel.value;
  td4.innerText = cpf.value;
  td5.innerText = dataNasc.value;
  td6.append(btEx);
  tr.append(td1, td2, td3, td4, td5, td6);
  corpoTabela.append(tr);
  event.target.reset()
}

function excluirLinha(e){
  const texto = e.target.getAttribute('texto');
      e.target.parentNode.parentNode.remove();
}

const form = document.getElementById('form1');
form.addEventListener('submit', inserirDadosTabela);