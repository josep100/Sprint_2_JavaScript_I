const processarCadena = (cadena, callback) => {
        if(isNaN(cadena))
            callback(cadena.toUpperCase());
        else{
            console.log("Tienes que escribir una cadena de texto");
        }
}

processarCadena("mesa", (cadenaMayu) => {
    console.log(cadenaMayu);
});