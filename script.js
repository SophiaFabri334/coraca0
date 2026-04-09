let card = document.getElementById("card");
let btnSim = document.querySelector("#yes");
let btnNao = document.querySelector("#no");

// FUNÇÃO DO BOTÃO SIM
btnSim.addEventListener("click", function () {
    let question = document.getElementById("question");
    let message = document.getElementById("answer");

    // Muda o fundo do card para o GIF de celebração
    card.style.backgroundImage = "url('https://img1.picmix.com/output/stamp/normal/5/1/0/1/1171015_f458c.gif')";
    card.style.backgroundSize = "cover";
    card.style.backgroundPosition = "center";

    // Esconde a pergunta e mostra a resposta
    question.style.display = "none";
    message.style.display = "flex";
});

// FUNÇÃO DO BOTÃO NÃO (FUGIR)
btnNao.addEventListener("mouseover", function () {
    // Calcula largura e altura da janela menos o tamanho do botão
    let larguraJanela = window.innerWidth - 150;
    let alturaJanela = window.innerHeight - 150;

    // Faz o botão flutuar sobre tudo
    this.style.position = "fixed";
    
    // Gera posições aleatórias
    let novaPosicaoTop = Math.random() * alturaJanela;
    let novaPosicaoLeft = Math.random() * larguraJanela;

    this.style.top = novaPosicaoTop + "px";
    this.style.left = novaPosicaoLeft + "px";
});