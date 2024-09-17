function leerArchivo() {
    return new Promise(function (resolve, reject) {
        console.log("Leyendo archivo...");
        setTimeout(function () {
            let exito = true; // Simula �xito o error
            if (exito) {
                resolve("Archivo le�do correctamente");
            } else {
                reject("Error al leer el archivo");
            }
        }, 2000);
    });
}
leerArchivo().then(function (resultado) {
    console.log(resultado);
}).catch(function (error) {
    console.log(error);
});