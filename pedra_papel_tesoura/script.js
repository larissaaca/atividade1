let opcoes = ["pedra", "papel", "tesoura"];

let jogador = prompt("Digite pedra, papel ou tesoura:");

jogador = jogador.toLowerCase();

let computador = opcoes[Math.floor(Math.random() * 3)];

console.log("Você escolheu: " + jogador);
console.log("O computador escolheu: " + computador);

if (jogador !== "pedra" && jogador !== "papel" && jogador !== "tesoura") {
    console.log("Opção inválida!");
}
else if (jogador === computador) {
    console.log("Empate!");
}
else if (
    (jogador === "pedra" && computador === "tesoura") ||
    (jogador === "papel" && computador === "pedra") ||
    (jogador === "tesoura" && computador === "papel")
) {
    console.log("Você ganhou!");
}
else {
    console.log("O computador ganhou!");
}