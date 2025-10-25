const input = (saludo) =>{
    const promesa = new Promise((resolve, reject) => {
             setTimeout(() => {
                if(saludo === "hola"){
                    resolve("hola");
                }else{
                    reject("Algo fue mal.");
                }
            }, 2000);
    });

    return promesa;
}

let resultado = input("adios");

resultado.then(saludo => console.log(saludo));
resultado.catch(error => console.log(error));