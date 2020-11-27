// Ordene o array numbers em ordem decrescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log("Desordenado")
console.log(numbers)

for (let index = 1; index < numbers.length; index += 1) {
    
    for (jindex = 0; jindex < index; jindex += 1) {

        if (numbers[index] > numbers[jindex]) {
            let position = numbers[index];

            numbers[index] = numbers[jindex];
            numbers[jindex] = position;

        }
    }
}

console.log("Ordem Decrescente")
console.log(numbers)