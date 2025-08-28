//tabuada interativa
// deve solicitar que o usuário digite um número
// deve gerar  e exibir a tabuada desse número de 1 a 10
// usar laço de repetição 

const readline = require('readline-sync');
//para pegar os digitos do teclado

const numero = parseInt (readline.question("Qual tabuada de 1 a 10 você deseja?")); 
    console.log(`\nTabuada do ${numero}`);
    //parseInt transforma string em número

for (let contador = 1; contador <= 10; contador++) {
    const resultado = numero * contador;
    console.log(`${numero} x ${contador} = ${resultado}`);

}