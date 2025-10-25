import promesa from "./01_main.mjs";

const saludo = async () => {
     let resultado = await promesa;

     console.log(resultado);
};

saludo();