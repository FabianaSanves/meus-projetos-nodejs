//Importe a biblioteca readline-sync (comunicação com o usuário)
const readline = require('readline-sync');

let idade = parseInt(readline.question("Digite sua idade: "));
//parseInt() é uma função em JavaScript usada para converter uma string em um número inteiro.

if (idade >= 21) {
    console.log("Você pode tirar carteira de motorista nas categorias C, D e E.");
} else if (idade >= 18) {
    console.log("Você pode tirar carteira de motorista nas categorias A e B.");
} else {
    console.log("Você ainda não tem idade para dirigir");
}
console.log("Idade informada: " + idade);