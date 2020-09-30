const obtenerChiste = require("./library");

// Codigo funcion callback

let mostrarChiste = function(chiste)
{
    let chisteRecibido = chiste[0];
    console.log(chisteRecibido.setup);
    console.log(chisteRecibido.punchline);
}

// Fin codigo

// Usar la funcion obtenerChiste(funcionCallback) en donde funcionCallback es una función que recibe el objeto chiste extraido
obtenerChiste(mostrarChiste);
