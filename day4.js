const numeroSorteado = Math.floor(Math.random() * 10) + 1; // Ajustado para o intervalo de 1 a 10

for (let contador = 1; contador <= 3; contador++) {
    const numeroEscolhido = parseInt(prompt('Escolha um número entre 1 e 10'), 10); // Convertendo para número

    if (numeroEscolhido === numeroSorteado) {
        alert('Parabéns, você acertou o número!');
        alert(`O número sorteado foi ${numeroSorteado}`);
        break;
    } else {
        alert('Você errou, tente novamente!');
    }

    if (contador === 3) { // A condição para o limite de tentativas
        alert(`Você atingiu o limite de tentativas. O número sorteado era ${numeroSorteado}`);
    }
}
