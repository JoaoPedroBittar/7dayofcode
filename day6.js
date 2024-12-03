// Inicializa arrays para cada categoria de alimentos
let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];

// Variáveis para armazenar o nome da comida e a categoria
let comida = "";
let categoria = "";
// Variável para controlar o loop
let adicionarMais = "sim";  // Valor inicial como "sim", porque a primeira vez sempre vai entrar no while

// Loop principal que continua enquanto a resposta não for "não"
while(adicionarMais != "não"){
    // Solicita ao usuário se deseja adicionar, remover um item ou sair
    adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras, remover uma comida da lista, ou sair? Responda 'adicionar', 'remover' ou 'não'.");

    // Verifica a opção escolhida
    if (adicionarMais === "não") {
        // Sai do loop se o usuário escolheu não adicionar mais
        break;
    } else if (adicionarMais === "adicionar") {
        // Solicita o nome da comida e a categoria
        comida = prompt("Qual comida você deseja inserir?");
        categoria = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces' ou 'congelados'?");

        // Adiciona a comida na categoria correspondente
        if (categoria === 'frutas') {
            frutas.push(comida);
        } else if (categoria === 'laticínios') {
            laticinios.push(comida);
        } else if (categoria === 'doces') {
            doces.push(comida);
        } else if (categoria === 'congelados') {
            congelados.push(comida);
        } else {
            // Informa o usuário caso a categoria não seja reconhecida
            alert("Essa categoria não foi pré-definida.");
        }
    } else if (adicionarMais === "remover") {
        // Cria uma lista de categorias com itens para remover
        let listaAtual = [];
        if (frutas.length > 0) listaAtual.push('frutas');
        if (laticinios.length > 0) listaAtual.push('laticínios');
        if (doces.length > 0) listaAtual.push('doces');
        if (congelados.length > 0) listaAtual.push('congelados');

        // Verifica se há categorias com itens para remover
        if (listaAtual.length === 0) {
            alert("Não há itens para remover.");
            continue; // Continua o loop se não houver itens para remover
        }

        // Solicita a categoria do item a ser removido
        let categoriaRemover = prompt(`Escolha a categoria para remover um item: ${listaAtual.join(', ')}`);
        
        // Verifica se a categoria escolhida é válida
        if (listaAtual.indexOf(categoriaRemover) === -1) {
            alert("Categoria não encontrada na lista.");
            continue; // Continua o loop se a categoria não for encontrada
        }

        // Solicita o nome do item a ser removido
        let itemRemover = prompt(`Digite o nome do item que você deseja remover da categoria '${categoriaRemover}':`);
        let categoriaArray;

        // Define a lista correspondente à categoria escolhida
        if (categoriaRemover === 'frutas') {
            categoriaArray = frutas;
        } else if (categoriaRemover === 'laticínios') {
            categoriaArray = laticinios;
        } else if (categoriaRemover === 'doces') {
            categoriaArray = doces;
        } else if (categoriaRemover === 'congelados') {
            categoriaArray = congelados;
        }

        // Remove o item da lista
        const index = categoriaArray.indexOf(itemRemover);
        if (index !== -1) {
            categoriaArray.splice(index, 1); // Remove o item pelo índice
            alert(`O item '${itemRemover}' foi removido com sucesso.`);
        } else {
            // Informa o usuário caso o item não seja encontrado
            alert("Não foi possível encontrar o item dentro da lista!");
        }
    } else {
        // Informa o usuário se a opção escolhida não for válida
        alert("Opção não reconhecida. Responda 'adicionar', 'remover' ou 'não'.");
    }
}

// Exibe a lista final de compras
alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);
