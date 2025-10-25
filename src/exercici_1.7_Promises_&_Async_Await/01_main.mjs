const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hola, món");
        }, 2000);
});

export default promesa;