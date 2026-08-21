let numeroSecreto = gerarNumero();
let tentativas = 0;

function gerarNumero() {
    return Math.floor(Math.random() * 20) + 1;
}

function verificarPalpite() {
    const campoPalpite = document.getElementById("palpite");
    const mensagem = document.getElementById("mensagem");
    const contador = document.getElementById("tentativas");

    const palpite = Number(campoPalpite.value);

    if (palpite < 1 || palpite > 20 || campoPalpite.value === "") {
        mensagem.textContent = "⚠️ Digite um número entre 1 e 20!";
        mensagem.style.color = "#dc3545";
        return;
    }

    tentativas++;

    contador.textContent = `Tentativas: ${tentativas}`;

    if (palpite < numeroSecreto) {
        mensagem.textContent = "⬆️ O número secreto é MAIOR!";
        mensagem.style.color = "#007bff";
    } 
    else if (palpite > numeroSecreto) {
        mensagem.textContent = "⬇️ O número secreto é MENOR!";
        mensagem.style.color = "#ff9800";
    } 
    else {
        mensagem.textContent = `🎉 Parabéns! Você acertou em ${tentativas} tentativa(s)!`;
        mensagem.style.color = "#28a745";

        campoPalpite.disabled = true;
    }

    campoPalpite.value = "";
    campoPalpite.focus();
}

function novoJogo() {
    numeroSecreto = gerarNumero();
    tentativas = 0;

    document.getElementById("palpite").disabled = false;
    document.getElementById("palpite").value = "";

    document.getElementById("mensagem").textContent = "";
    document.getElementById("tentativas").textContent = "Tentativas: 0";

    document.getElementById("palpite").focus();
}