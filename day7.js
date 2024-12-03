let numero1 = parseInt(prompt("Digite o primeiro numero"));
let numero2 = parseInt(prompt("Digite o segundo numero"));
let operacao = prompt("escolha a operação")

function soma(a, b) {
    return a + b
}

function multiplicacao(a, b) {
    return a * b
}

const subtracao = (a, b) => a - b

function divisao(a, b) {
    return a / b
}

switch (operacao) {
    case "soma":
        alert(`O valor encontrado foi: ${soma(numero1, numero2)}`);
        break
    case "divisao": alert(divisao(numero1, numero2))
        break
    case "subtracao": alert(subtracao(numero1, numero2))
        break
    case "multiplicacao": alert("o valor encontrado foi: " + multiplicacao(numero1, numero2))
        break
    default: alert("operação não encontrada")
}

