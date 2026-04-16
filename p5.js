function calcular() {
    // 1. Pegar os elementos do DOM
    const distanciaInput = document.getElementById('distancia');
    const transporte = document.getElementById('transporte').value;
    const frequencia = document.getElementById('frequencia').value;
    const resultadoDiv = document.getElementById('resultado');

    const kmDiario = parseFloat(distanciaInput.value);

    // Validação de erro
    if (!kmDiario || kmDiario <= 0) {
        alert("Ei! Insira quantos quilômetros você percorre para o EcoFerry funcionar.");
        return;
    }

    // 2. Cálculos Logísticos
    // Consideramos 4 semanas por mês
    const diasNoMes = parseInt(frequencia) * 4;
    const kmMensal = kmDiario * diasNoMes;

    let custoTotal = 0;
    let co2Total = 0;

    // Tabela de valores (Médias de mercado)
    if (transporte === "carro") {
        custoTotal = kmMensal * 0.85; // Gasolina + Desgaste
        co2Total = kmMensal * 0.120; // 120g por km em kg
    } else if (transporte === "onibus") {
        custoTotal = kmMensal * 0.50; // Tarifa média ponderada
        co2Total = kmMensal * 0.030; // 30g por km por passageiro
    } else {
        custoTotal = 0;
        co2Total = 0;
    }

    // 3. Atualizar a Interface
    document.getElementById('res-gasto').innerText = `R$ ${custoTotal.toFixed(2)}`;
    document.getElementById('res-co2').innerText = `${co2Total.toFixed(2)} kg`;

    const dica = document.getElementById('dica-sustentavel');
    if (transporte === "carro") {
        dica.innerHTML = `⚠️ <strong>Atenção:</strong> Deixar o carro ${frequencia}x por semana economizaria bastante no seu IPVA invisível!`;
    } else if (transporte === "onibus") {
        dica.innerHTML = `🚌 <strong>Bom trabalho!</strong> O transporte coletivo é o coração da mobilidade urbana eficiente.`;
    } else {
        dica.innerHTML = `🌿 <strong>Incrível!</strong> Sua pegada de carbono é nula. A Terra agradece o fôlego extra!`;
    }

    // 4. A Mágica da Animação
    // Adicionamos a classe CSS que altera a altura de 0 para 500px
    resultadoDiv.classList.add('mostrar');
}
