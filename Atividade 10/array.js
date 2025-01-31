console.log('Operacoes com array');

let array1 = [1,'cavalo',3,'pera','terra'];
let array2 = [9,8,6,4,2];
console.log('declarados dois arrays, array1 e array2');
console.log('array 1: '+array1);
console.log('array 2: '+array2);
console.log('1 - usando a funcao concat, irei concatenar os dois arrays');
console.log(array1.concat(array2));
console.log('2 - agora irei utilizar o metodo toString,ele imprime o array como uma string separando os elementos com uma virgula');
console.log(array1.toString());
console.log('3 - o metodo pop() remove o ultimo elemento de um array e o retorna, segue um exemplo abaixo utilizando o array 1');
console.log(array1.pop());
console.log('o novo array 1 fica: '+array1);
console.log('4 - o metodo splice altera um array adicionando removendo e inserindo elementos como exemplo irei utilizar o array 2');
array2.splice(0,3,'ultimo','exemplo','desta','atividade');
array2.splice(4,2);
console.log(array2.join(' '));