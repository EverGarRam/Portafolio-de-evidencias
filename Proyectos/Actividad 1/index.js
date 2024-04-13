document.addEventListener("DOMContentLoaded", function() {
    var btnCalcular = document.getElementById('btnCalcular');
    btnCalcular.addEventListener('click', function() {
        var inicio = parseInt(document.getElementById('inicio').value);
        var fin = parseInt(document.getElementById('fin').value);
        
        if (isNaN(inicio) || isNaN(fin)) {
            alert('Por favor, ingresa números válidos en ambos campos.');
            return;
        }

        var sumaPares = 0;
        for (var i = inicio; i <= fin; i++) {
            if (i % 2 === 0) { // Verificar si el número es par
                sumaPares += i;
            }
        }

        document.getElementById('resultado').textContent = 'La suma de los números pares entre ' + inicio + ' y ' + fin + ' es: ' + sumaPares;
    });
});
