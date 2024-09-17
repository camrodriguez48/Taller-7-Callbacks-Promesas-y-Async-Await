// Simulación de una función que simula la descarga de datos de una API
function descargarDatosDeAPI(apiNombre, tiempo) {
    return new Promise((resolve) => {
        console.log(`Descargando datos de ${apiNombre}...`);
        setTimeout(() => {
            resolve(`Datos de ${apiNombre}`);
        }, tiempo); // Simula el tiempo de descarga
    });
}

// Función asíncrona que descarga de tres APIs de manera secuencial
async function descargarDatosSecuencial() {
    try {
        // Descarga de la primera API
        const datosAPI1 = await descargarDatosDeAPI('API 1', 2000); // 2 segundos
        console.log(datosAPI1);

        // Descarga de la segunda API
        const datosAPI2 = await descargarDatosDeAPI('API 2', 1500); // 1.5 segundos
        console.log(datosAPI2);

        // Descarga de la tercera API
        const datosAPI3 = await descargarDatosDeAPI('API 3', 1000); // 1 segundo
        console.log(datosAPI3);

        console.log('Descarga completada de todas las APIs.');
    } catch (error) {
        console.error('Error en la descarga de datos:', error);
    }
}

// Llamamos a la función para iniciar las descargas
descargarDatosSecuencial();
