function calcular() {
    // 1. Captura os valores
    const distancia = document.getElementById('distancia').value;
    const transporte = document.getElementById('transporte').value;
    const frequencia = document.getElementById('frequencia').value;
    const resultadoDiv = document.getElementById('resultado');

    // Validação simples
    if (distancia === "" || distancia <= 0) {
        alert("Por favor, insira uma distância válida.");
        return;
    }

    // 2. Cálculos (4 semanas por mês como base)
    const diasNoMes = frequencia * 4; 
    const distMensal = distancia * diasNoMes;
    
    let custo = 0;
    let co2 = 0;

    if (transporte === "carro") {
        custo = distMensal * 0.85;
        co2 = distMensal * 0.120; 
    } else if (transporte === "onibus") {
        custo = distMensal * 0.50;
        co2 = distMensal * 0.030;
    } else {
        custo = 0;
        co2 = 0;
    }

    // 3. Inserir resultados na tela
    document.getElementById('res-gasto').innerText = `R$ ${custo.toFixed(2)}`;
    document.getElementById('res-co2').innerText = `${co2.toFixed(2)} kg`;
    
    const dica = document.getElementById('dica-sustentavel');
    if (custo > 0) {
        dica.innerHTML = `<strong>EcoFerry Informa:</strong> Sua pegada mensal é de ${co2.toFixed(2)}kg de CO2.`;
        dica.style.color = "#d32f2f";
    } else {
        dica.innerHTML = "<strong>EcoFerry Informa:</strong> Parabéns! Sua pegada é zero! 🌱";
        dica.style.color = "#388e3c";
    }

    // 4. Mostrar a área oculta
    resultadoDiv.style.display = "block";
}
