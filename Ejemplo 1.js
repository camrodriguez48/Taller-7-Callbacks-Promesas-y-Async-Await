function saludar(nombre, callback) {
    console.log("Hola, " + nombre);
    callback();
}
function despedir() {
    console.log("Adi�s");
}
saludar("Alice", despedir); // Imprime: Hola, Alice seguido de
Adi�s