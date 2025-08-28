/* O Desafio:

Crie um programa que faça o seguinte:
1. Pergunte ao usuário o nome completo.
2. Mostre o nome completo em maiúsculas e minúsculas.
3. Mostre quantos caracteres o nome completo tem (descontando os espaços em branco).
4. Mostre o primeiro nome e o último nome separadamente.*/

const readline = require('readline-sync');

//1. Pergunte ao usuário o nome completo.
const nomeCompleto = readline.question('Digite seu nome completo, por gentileza: ');

//2. Mostre o nome completo em maiúsculas e minúsculas. 
console.log(`Seu nome completo em maiúsculas é: ${nomeCompleto.toUpperCase()}`);
console.log(`Seu nome completo em minúsculas é: ${nomeCompleto.toLowerCase()}`);

//3. Mostre quantos caracteres o nome completo tem (descontando os espaços em branco).
const nomeSemEspacos = nomeCompleto.replace(/\s/g, "");
console.log(`Seu nome tem ${nomeSemEspacos.length} caracteres (sem contar espaços).`);

//4. Mostre o primeiro nome e o último nome separadamente.
const partesDoNome = nomeCompleto.trim().split(" ");
const primeiroNome = partesDoNome[0];
const ultimoNome = partesDoNome[partesDoNome.length - 1];
console.log(`Primeiro nome: ${primeiroNome}`);
console.log(`Último nome: ${ultimoNome}`);