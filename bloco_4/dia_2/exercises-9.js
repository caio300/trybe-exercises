//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let meuArray = [];

for (let index = 1; index < 26; index += 1) {
    meuArray.push(index);
    
}

let divisao = 0;

for (let index = 0; index < meuArray.length; index += 1) {
    divisao = meuArray[index] / 2;

    console.log(divisao)
}