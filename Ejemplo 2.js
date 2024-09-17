let promesa = new Promise(function (resolve, reject) {
    let exito = true;
    if (exito) {
        resolve("La operaci�n fue exitosa");
    } else {
        reject("Hubo un error");
    }
});
promesa.then(function (resultado) {
    console.log(resultado); // Imprime: La operaci�n fue exitosa
}).catch(function (error) {
    console.log(error); // Imprime: Hubo un error si la promesa falla
});
