// O Desafio:
// Crie um programa que faça o seguinte:
// Pergunte ao usuário o nome completo.
// Mostre o nome completo em maiúsculas e minúsculas.
// Mostre quantos caracteres o nome completo tem (descontando os espaços em branco).
// Mostre o primeiro nome e o último nome separadamente.


const readline = require ('readline-sync');

// Perguntar ao usuário o nome completo
const nomeCompleto = (readline.question("Por favor, digite seu nome completo: "));

// Mostrando o nome completo em maiúsculas e minúsculas.

    //toUpperCase(): tudo em maiúsculas.
    console.log(`Seu nome em MAIÚSCULAS é: ${nomeCompleto.toUpperCase()}`);
    // toLowerCase(): tudo em minúsculas.
    console.log(`Seu nome em minúsculas é: ${nomeCompleto.toLowerCase()}`);

// Remover espaços extras do início e do fim usando .trim()
nomeCompleto = nomeCompleto.trim();

// .length: Para contar caracteres
const totalDeLetras = nomeSemEspacos.length;

    // Mostrando quantos caracteres o nome completo tem (descontando os espaços em branco).
    console.log("Seu nome completo tem " + totalDeLetras + " letras (sem contar os espaços).");
    


// Mostrar quantos caracteres o nome completo tem (sem contar espaços)
// Primeiro, removemos todos os espaços internos com .replaceAll(" ", "")
// Depois, usamos .length para contar os caracteres restantes
let caracteresSemEspaco = nomeCompleto.replaceAll(" ", "");
console.log("Quantidade de caracteres (sem espaços): " + caracteresSemEspaco.length);























// .split(' '): Para quebrar o nome em partes (primeiro, último, etc.)
const arrayDeNomes = nomeCompleto.split(' ');

// .join(''): junta todos os itens de um array para formar uma única string
const nomeSemEspacos = arrayDeNomes.join('');

// arrayDeNomes[0]: para pegar o primeiro item de qualquer array, usamos o índice 0
const primeiroNome = arrayDeNomes[0];

// arrayDeNomes.length - 1: o último item sempre estará na posição tamanho - 1
const ultimoNome = arrayDeNomes[arrayDeNomes.length - 1];


    //Mostrando o primeiro nome e o último nome separadamente.
    console.log("Seu primeiro nome é: " + primeiroNome);
    console.log("Seu último nome é: " + ultimoNome);
