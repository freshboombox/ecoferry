// Esta função roda assim que o botão é clicado
function calcular() {
    console.log("O botão foi clicado com sucesso!"); // Aparece no F12 do navegador

    // 1. Captura os elementos da tela
    const campoDistancia = document.getElementById('distancia');
    const campoTransporte = document.getElementById('transporte');
    const campoFrequencia = document.getElementById('frequencia');
    const divResultado = document.getElementById('resultado');

    // 2. Transforma os textos em números reais
    const kmDiario = parseFloat(campoDistancia.value);
    const transporte = campoTransporte.value;
    const diasPorSemana = parseInt(campoFrequencia.value);

    // 3. Validação de segurança: Se não houver número, ele para aqui
    if (isNaN(kmDiario) || kmDiario <= 0) {
        alert("Ops! Você esqueceu de colocar a distância percorrida.");
        return; 
    }

    // 4. Lógica de cálculo (Baseada em 4 semanas por mês)
    const kmMensal = kmDiario * diasPorSemana * 4;
    let custoTotal = 0;
    let co2Total = 0;

    // Valores de referência
    if (transporte === "carro") {
        custoTotal = kmMensal * 0.85; // R$ 0,85 por km
        co2Total = kmMensal * 0.120;  // 120g em kg
    } else if (transporte === "onibus") {
        custoTotal = kmMensal * 0.50; // R$ 0,50 por km (estimativa de passagem)
        co2Total = kmMensal * 0.030;  // 30g em kg
    } else if (transporte === "bike") {
        custoTotal = 0;
        co2Total = 0;
    }

    // 5. Inserir os valores nos campos de texto
    // Usamos toFixed(2) para garantir 2 casas decimais (moeda)
    document.getElementById('res-gasto').innerText = "R$ " + custoTotal.toFixed(2).replace('.', ',');
    document.getElementById('res-co2').innerText = co2Total.toFixed(2) + " kg";

    // 6. Mensagem Dinâmica (Dica)
    const dica = document.getElementById('dica-sustentavel');
    if (custoTotal > 0) {
        dica.innerHTML = `<strong>Dica EcoFerry:</strong> Você percorre ${kmMensal}km por mês. Tente usar bike 1x na semana para economizar!`;
    } else {
        dica.innerHTML = "<strong>Parabéns!</strong> Você é um herói do planeta! Pegada de carbono zero. 🌱";
    }

    // 7. A MÁGICA: Faz a área de resultados aparecer
    // Primeiro removemos caso já tenha, e adicionamos para garantir a animação
    divResultado.classList.remove('mostrar');
    
    // Pequeno atraso de 10 milissegundos para o navegador perceber a mudança e animar
    setTimeout(() => {
        divResultado.classList.add('mostrar');
    }, 10);
}
