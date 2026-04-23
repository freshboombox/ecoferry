function gerarImpacto() {
    const btn = document.getElementById('btn-calc');
    const km = parseFloat(document.getElementById('distancia').value);
    const transporte = document.getElementById('transporte').value;
    const freq = parseInt(document.querySelector('input[name="freq"]:checked').value);
    const areaResultado = document.getElementById('resultado');
    const barra = document.querySelector('.loading-bar');
    const progresso = document.querySelector('.progress');

    if (!km || km <= 0) {
        alert("Ei, coloca a distância pra gente calcular! 😉");
        return;
    }

    // Efeito de "Pensando..."
    btn.innerText = "Processando...";
    btn.disabled = true;
    barra.style.display = "block";
    
    setTimeout(() => {
        progresso.style.width = "100%";
        
        setTimeout(() => {
            exibirResultados(km, transporte, freq);
            areaResultado.classList.add('active');
            btn.innerText = "Recalcular impacto";
            btn.disabled = false;
        }, 800);
    }, 100);
}

function exibirResultados(km, modal, freq) {
    const kmMes = km * freq * 4.3; // Média de semanas no mês
    let custo = 0;
    let co2 = 0;
    let msg = "";

    if (modal === "carro") {
        custo = kmMes * 0.92; // Valor atualizado médio
        co2 = kmMes * 0.130;
        msg = "O carro te dá conforto, mas olha esse custo! Já pensou em revezar carona com alguém do trampo?";
    } else if (modal === "onibus") {
        custo = kmMes * 0.45;
        co2 = kmMes * 0.025;
        msg = "Mandou bem! O transporte público é uma das melhores formas de aliviar o trânsito e o planeta.";
    } else {
        custo = 0;
        co2 = 0;
        msg = "Nível lendário! 🚲 Você não gasta nada e ainda ganha saúde. O planeta te deve um abraço!";
    }

    document.getElementById('res-gasto').innerText = `R$ ${custo.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
    document.getElementById('res-co2').innerText = `${co2.toFixed(1)} kg`;
    document.getElementById('dica-sustentavel').innerHTML = `<strong>Dica do EcoFerry:</strong> ${msg}`;
}
