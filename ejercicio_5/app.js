const obtenerPersonaFake = require("./library");

// Codigo funcion callback

let mostrarPersona = function(persona)
{
    let datosPersona = persona.results[0];
    console.log("Nombre: " + datosPersona.name.first + " " +datosPersona.name.last);
    console.log("Genero: " + datosPersona.gender)
    console.log("Pais: " +datosPersona.location.country + " Estado: " + datosPersona.location.state + " Ciudad: " + datosPersona.location.city + " Calle: " + datosPersona.location.street.name + " " + datosPersona.location.street.number + " CP: " + datosPersona.location.postcode);
    console.log("Email: " + datosPersona.email)
    console.log("Usuario: " + datosPersona.login.username)
    console.log("Contraseña: " + datosPersona.login.password)
}

// Fin codigo

// Usar la funcion obtenerPersonaFake(funcionCallback) en donde funcionCallback es una función que recibe el objeto persona extraido
obtenerPersonaFake(mostrarPersona);
