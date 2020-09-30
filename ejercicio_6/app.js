const obtenerPersonaFake = require("./library");

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

// Usar la funcion obtenerPersonaFake() la cual devuelve la promesa de traer el objeto persona extraido
obtenerPersonaFake()
.then((persona)  => {
 mostrarPersona(persona);
}).catch((err) => {
    console.log("No se encontro la persona");
});
