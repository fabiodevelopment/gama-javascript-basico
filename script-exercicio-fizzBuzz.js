// FizzBuzz
// Divisivel por 3 => 'Fizz'
// Divisivel por 5 => 'Buzz'
// Divisivel por 3 e 5 => 'FizzBuzz'
// Se não for número => 'Não é um número'
// Se não for divisivel nem por 3 e nem por 5 => Entrada

function fizzBuzz(entrada) {
    if(typeof entrada !== 'number') {
         return 'Não é um numero';
    }
    if ( (entrada % 3 === 0) && (entrada % 5 === 0)) {
        return 'FizzBuzz';
    }
    if ( entrada % 3 === 0 ) {
        return 'Fizz';
    }
    if ( entrada % 5 === 0 ) {
        return 'Buzz';
    } else  {
        return entrada;
    }
}

let resultado = fizzBuzz(3);
console.log(resultado);

resultado = fizzBuzz(5);
console.log(resultado);

resultado = fizzBuzz(15);
console.log(resultado);

resultado = fizzBuzz("string");
console.log(resultado);

resultado = fizzBuzz(7);
console.log(resultado);