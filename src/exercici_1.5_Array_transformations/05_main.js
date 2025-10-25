const numeros = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

const suma = (numeros) => numeros.filter(numero => numero >= 10).map(numero => numero * 2).reduce((valorAnterior, valorActual) => valorAnterior + valorActual)

console.log(suma(numeros));