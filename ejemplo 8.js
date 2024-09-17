async function descargarSecuencialmente() {
    console.log("Descargando archivos...");
    await descargarArchivo(() => console.log("Archivo 1 descargado"));
    await descargarArchivo(() => console.log("Archivo 2 descargado"));
    console.log("Descarga completada.");
}
descargarSecuencialmente();
