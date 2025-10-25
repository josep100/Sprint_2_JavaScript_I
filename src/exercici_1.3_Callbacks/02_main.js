const calculadora = (num1, num2, callback) => {
    return callback(num1, num2);
}

const suma = calculadora(2, 2, (num1, num2) => {
        return num1 + num2;
});

console.log(suma);