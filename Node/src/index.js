const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Ingresa un número: ', (input) => {
    let numero = parseInt(input);
    let suma = 0;

    for (let i = 1; i < numero; i++) {
        suma += i;
    }

    console.log(`La suma de los números antes de ${numero} es: ${suma}`);
    rl.close();
});
