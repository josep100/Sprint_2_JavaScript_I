const objeto1 = {
    nombre: "josep",
    edad: 41
}

const objeto2 = {...objeto1};

objeto2.nombre = "sergio";

console.log(objeto1);

console.log(objeto2);