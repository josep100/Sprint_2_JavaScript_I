const sumar = (...numeros) => {
    let suma = 0;

    numeros.forEach(numero =>{
        suma += numero;
    });

    return suma;
}

console.log(sumar(4,10,7,10));