// Adicionar Itens

let compras = []; // Array vazio para a lista

function adicionarItens(item) {
    compras.push(item);
    
    console.log(`${item} foi adicionado a lista`);   
}
adicionarItens('Pão');
adicionarItens('Queijo');
adicionarItens('Iogurte');
adicionarItens('Mussarela');
adicionarItens('Presunto');


// Verificar se o item existe na lista

let itensInclusos = compras.includes('Pão', 'Queijo', 'Iogurte', 'Mussarela', 'Presunto'); 
    console.log(`${itensInclusos} foi verificado`);

// Remover Itens

let itensRemovidos = compras.splice(1, 2);
    console.log(`${itensRemovidos} item removido`);

// Verificar se o item existe na lista

itensInclusos = compras.includes('Queijo','Iogurte'); 
    console.log(`${itensInclusos}`);

// Listar Itens

let item = [];

function listaFinal(item) { 
    
    for (let i = 0; i < ; i++) {
        console.log(i); 
    }
}

listaFinal(item);
