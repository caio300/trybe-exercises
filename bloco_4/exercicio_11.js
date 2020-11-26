let salario = 3000;

let inss = 0;
let ir = 0;



if (salario < 1556.94) {
    inss = 0.8;
    let valorImposto = salario * inss;
    salario = salario - valorImposto; 
    console.log(inss, salario);

} else if (salario < 2594.92) {
    inss = 0.9;
    let valorImposto = salario * inss;
    salario = salario - valorImposto;
    console.log(inss, salario);

} else if (salario < 5189.82){
    inss = 0.11;
    let valorImposto = salario * inss;
    salario = salario - valorImposto;
    console.log(inss, salario);
} else {
    inss = 570.88;
    let valorImposto = salario * inss;
    salario = salario - valorImposto;
    console.log(inss, salario);
}

if (salario < 1903.98) {
    ir = 0;
    console.log("Isento de imposto", salario, ir);
} else if (salario < 2826.65) {
    ir = 0.075;
    let valorIr = salario * ir - 142.80;
    salario = salario - valorIr;
    console.log(valorIr, salario)
} else if (salario < 3751.05) {
    ir = 0.15;
    let valorIr = salario * ir - 354.80;
    salario = salario - valorIr;
    console.log(valorIr, salario)
} else if (salario < 4664.68) {
    ir = 0.225;
    let valorIr = salario * ir - 636.13;
    salario = salario - valorIr;
    console.log(valorIr, salario)
} else {
    ir = 0.275;
    let valorIr = salario * ir - 869.36;
}     