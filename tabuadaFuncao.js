//crie uma função chamada gerarTabuada
//Ela deve receber um número como parâmetros (ex. gerar Tabuada)
// Dentro da função use um loop (ex. for) para imprimir a tabuada desse número no console

const readline = require('readline-sync');
const numero = parseInt(readline.question("Qual tabuada de 1 a 10 você deseja?"));

function gerarTabuada(numero) {

    console.log(`\nTabuada do ${numero}`);

    for (let contador = 1; contador <= 10; contador++) {
        const resultado = numero * contador;

        console.log(`${numero} x ${contador} = ${resultado}`);
    };
}

gerarTabuada(numero);

