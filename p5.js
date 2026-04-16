function calcular() {
    // 1. Captura os valores dos campos
    const distancia = document.getElementById('distancia').value;
    const transporte = document.getElementById('transporte').value;
    const resultadoDiv = document.getElementById('resultado');

    if (distancia <= 0) {
        alert("Por favor, insira uma distância válida.");
        return;
    }

    // 2. Definição das constantes (Lógica que você já conhece)
    const diasMes = 22;
    const distMensal = distancia * diasMes;
    let custo = 0;
    let co2 = 0;

    // 3. Estrutura de Decisão
    if (transporte === "carro") {
        custo = distMensal * 0.85;
        co2 = distMensal * 0.120; // Já convertendo g para kg
    } else if (transporte === "onibus") {
        custo = distMensal * 0.50;
        co2 = distMensal * 0.030;
    } else {
        custo = 0;
        co2 = 0;
    }

    // 4. Exibição dos dados na tela
    document.getElementById('res-gasto').innerText = `R$ ${custo.toFixed(2)}`;
    document.getElementById('res-co2').innerText = `${co2.toFixed(2)} kg`;
    
    // Dica de sustentabilidade dinâmica
    const dica = document.getElementById('dica-sustentavel');
    if (transporte === 'carro') {
        dica.innerText = "💡 Se você usasse bike, economizaria R$ " + custo.toFixed(2) + " por mês!";
        dica.style.color = "#d32f2f";
    } else {
        dica.innerText = "🌟 Parabéns pela escolha sustentável!";
        dica.style.color = "#388e3c";
    }

    // Mostra a div de resultados
    resultadoDiv.classList.remove('hidden');
}
