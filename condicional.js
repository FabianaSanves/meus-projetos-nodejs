
// boas práticas para escrever o código
// usar o padrão Camel Caseex.: let nomeDoCliente = 'Fabi'; (caixa baixa com a primeira letra de cada palavra em caixa alta, exceto a primeira)
// usar o padrão Screaming Snake Case ex.: const NOME_DO_CLIENTE = 'Fabi'; (caixa alta com _entre as palavras)
// não utilize palavras reservadas, pois estas já têm uma função específica
// ex.: let for = 'Fabi'; //'for' é uma palavra reservada

//Ex.: de estrutura condicional
let idade = 16; 
//variável com a idade da pessoa
if(idade >= 18) {
    //Se a idade for maior ou igual a 18
    console.log("Você é elegível pra votar.");
} else {
    //Se não, a idade é menor que 18
    console.log("Você não é elegível pra votar ainda.");
}
