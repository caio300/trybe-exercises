let valorPorcentagem = 53;

if (valorPorcentagem < 0 || valorPorcentagem > 100) {
    console.log("ERRO ! Valor errado.")
} else if (valorPorcentagem >= 90 ) {
    console.log("A");
} else if (valorPorcentagem >= 80) {
    console.log("B");
} else if (valorPorcentagem >= 70) {
    console.log("C");
} else if (valorPorcentagem >= 60) {
    console.log("D");
} else if (valorPorcentagem >= 50) {
    console.log("E");
} else if (valorPorcentagem < 50) {
    console.log("F");
}
