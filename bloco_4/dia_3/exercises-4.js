// Depois, faça uma pirâmide com n asteriscos de base:

// n = 5

//   *
//  ***
// *****

let n = 5;

let v = "*"

let l = " ";

for (let index = 1; index <= 5; index += 2){
    
    let val = n - index;
    console.log(l.repeat(val/2), v.repeat(index), l.repeat(val/2));
    
}