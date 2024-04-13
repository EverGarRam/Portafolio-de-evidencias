function factorizar() {
    var numero = parseInt(document.getElementById("numero").value);
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (isNaN(numero) || numero <= 0) {
        resultado.textContent = "Por favor, ingrese un número entero positivo válido.";
        return;
    }

    var factores = [];

    for (var i = 2; i <= numero; i++) {
        while (numero % i === 0) {
            factores.push(i);
            numero /= i;
        }
    }

    if (factores.length === 0) {
        resultado.textContent = "El número ingresado es un número primo.";
    } else {
        resultado.textContent = "Los factores del número son: " + factores.join(", ");
    }
}