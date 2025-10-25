const numeros = [1, 2, 3];

const spread = (num1, num2, num3) => {
    console.log(`número1: ${num1}, número2: ${num2}, número3: ${num3}`);
}

spread(...numeros);