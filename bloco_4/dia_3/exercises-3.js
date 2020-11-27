// Agora inverta o lado do triângulo. Por exemplo:

// n = 5
//     *
//    **
//   ***
//  ****
// *****

let n = 5;

let l = "*";

let e = " ";

for (let index = 1; index <= 5; index += 1) {

    let val = n - index;
    console.log(e.repeat(val), l.repeat(index));
    
    
}