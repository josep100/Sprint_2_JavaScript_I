import promesa from "./01_main.mjs";

const saludo = async () => {
    try {
        let resultado = await promesa;
        console.log(resultado);
    } catch (error) {
        console.log("Hubo un error:", error);
    }
};

saludo();