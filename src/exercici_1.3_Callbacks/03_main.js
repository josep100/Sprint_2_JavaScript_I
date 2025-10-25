const esperarISaludar = (nombre, callback) => {
    setTimeout(() => {
        callback(nombre);
    }, 2000);
}

esperarISaludar("josep", (nombre) =>{
    console.log(`hola ${nombre}`);
});