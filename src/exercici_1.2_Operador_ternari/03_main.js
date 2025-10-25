// 3.1

    const checkNumberSign = (num) => {
        return num > 0 ? "El número es positivo" : num < 0 ? "El número es negativo" : "El número es zero";
    }

    console.log(checkNumberSign(0));

// 3.2

const trobarMaxim = (a, b, c) => {
    return (a > b) && (a > c) ? "A es el valor más grande ": b > c ? "B es el valor más grande " : "C es el valor más grande";
}

console.log(trobarMaxim(5,8,13));