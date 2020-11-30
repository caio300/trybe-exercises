// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
// n = 7

//    *
//   * *
//  *   *
// *******





let n = 5;

let v = "*"

let l = " ";

for (let index = 1; index <= 5; index += 2){
    
    let val = n - index;
    console.log(l.repeat(val/2), v.repeat(index), l.repeat(val/2));
    
}
