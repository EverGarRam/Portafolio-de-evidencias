// Función para sumar dos números
function sumar(numero1, numero2) {
    return numero1 + numero2;
}

// Función para calcular el promedio de tres números
function calcularPromedio(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3;
}

// Función para realizar las operaciones básicas
function operacionesBasicas() {
    // Suma
    const suma1 = sumar(10, 5);
    console.log("Suma:", suma1);

    // Resta
    const resta1 = 10 - 5;
    console.log("Resta:", resta1);

    // Multiplicación
    const multiplicacion1 = 10 * 5;
    console.log("Multiplicación:", multiplicacion1);

    // División
    const division1 = 10 / 5;
    console.log("División:", division1);
}

// Función para ejecutar el código
function ejecutarCodigo() {
    // Suma
    const suma1 = sumar(10, 5);
    console.log("Suma:", suma1);

    // Promedio
    const promedio1 = calcularPromedio(10, 8, 7);
    console.log("Promedio:", promedio1);

    // Operaciones básicas
    operacionesBasicas();
}

// Ejecutar el código
ejecutarCodigo()