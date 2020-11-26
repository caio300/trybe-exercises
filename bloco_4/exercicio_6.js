// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas 
//quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

//Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .

//Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

//Exemplo: bishop -> diagonals

let pecaXadrez = "rei";

switch (pecaXadrez) {

    case "rei":
        console.log("Pode mover-se em qualquer direção, porém apenas uma casa por vez.");
        break;
    
    case "dama":
        console.log("Pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.");
        break;
    
    case "torre":
        console.log("Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.");
        break;

    case "bispo":
        console.log("Move-se na diagonal, quantas casas quiser..");
        break;

    case "cavalo":
        console.log("O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L");
        break;

    case "peão":
        console.log("Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas.");
        break;

    default:
        console.log("Peça nao existe")

}