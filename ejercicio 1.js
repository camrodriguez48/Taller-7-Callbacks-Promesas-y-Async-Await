function verificarArchivo(rutaArchivo, callback) {
    console.log(`Verificando si el archivo ${rutaArchivo} existe...`);

    // Simulamos la verificación de la existencia del archivo
    setTimeout(() => {
        const existe = Math.random() > 0.5; // Simulación de existencia del archivo (50% de probabilidad)

        if (existe) {
            console.log(`El archivo ${rutaArchivo} existe.`);
            callback(null, `Contenido del archivo ${rutaArchivo}`);
        } else {
            console.log(`El archivo ${rutaArchivo} no existe.`);
            callback(new Error(`Archivo no encontrado: ${rutaArchivo}`), null);
        }
    }, 1000); // Simulamos un retardo de 1 segundo
}

function leerArchivo(rutaArchivo) {
    verificarArchivo(rutaArchivo, (error, contenido) => {
        if (error) {
            console.error(error.message);
        } else {
            console.log(`Leyendo el archivo: ${contenido}`);
        }
    });
}

// Llamamos a la función para leer un archivo
leerArchivo('miArchivo.txt');
