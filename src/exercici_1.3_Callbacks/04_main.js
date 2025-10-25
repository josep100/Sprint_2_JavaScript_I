const numeros = [4,6,10,6,50,88,100,23,8];

const processarElements = (numeros, callback) => {
        numeros.forEach(numero => {
              callback(numero);
        });
}

processarElements(numeros, (numero) => {
    console.log(numero);
});