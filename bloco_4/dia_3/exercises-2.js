// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// n = 5

// *
// **
// ***
// ****
// *****

let n = 5;

let l = "*";

for (let index = 1; index <= 5; index += 1) {
    console.log(l.repeat(index));
    
}