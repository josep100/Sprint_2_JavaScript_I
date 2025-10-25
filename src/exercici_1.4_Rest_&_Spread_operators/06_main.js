const pelicula1 = {
    titulo: "spiderman",
    duracion: "2h"
}

const pelicula2 = {
    titulo2: "avatar",
    duracion2: "3h"
}

const combined = {...pelicula1, ...pelicula2}

console.log(combined);