function conectarBaseDeDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Conexi�n establecida");
        }, 1000);
    });
}
function procesarDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Datos procesados");
        }, 1000);
    });
}
conectarBaseDeDatos()
    .then((mensaje) => {
        console.log(mensaje); // Conexi�n establecida
        return procesarDatos();
    })
    .then((mensaje) => {
        console.log(mensaje); // Datos procesados
    });

