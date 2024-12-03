let nome = prompt("Qual é seu nome?");
let idade = prompt("Quantos anos você tem?");
let linguagem = prompt("Qual linguagem de programação você está estudando?");

alert(`Olá, ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

let resposta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO`);

// Enquanto a resposta for diferente de 1 ou 2, continue repetindo o prompt
while (resposta !== "1" && resposta !== "2") {
    resposta = prompt(`Opção inválida! Por favor, responda com o número 1 para SIM ou 2 para NÃO.\nVocê gosta de estudar ${linguagem}?`);
}

if (resposta === "1") {
    alert("Muito bom! Continue estudando e você terá muito sucesso!");
} else if (resposta === "2") {
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
}