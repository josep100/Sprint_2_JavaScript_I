const numeros = [8, 2, 3, 20, 9, 10, 4, 23, 90, 100];

const parOImpar = (numeros) => {

    numeros.forEach(numero => {
        console.log(numero % 2 == 0 ? `El número ${numero} es par` : `El número ${numero} es impar`);
    });

}

parOImpar(numeros);