document.addEventListener('DOMContentLoaded', function() {
    var estudiantes = [];

   
    cargarDesdeLocalStorage();
    llenaTabla();

    
    var agregarBtn = document.getElementById('agregar');
    agregarBtn.addEventListener('click', function() {
        var matricula = document.getElementById('matricula').value;
        var nombre = document.getElementById('nombre').value;
        var apellidos = document.getElementById('apellidos').value;
        var carrera = document.getElementById('carrera').value;

        if (matricula && nombre && apellidos && carrera) {
            var estudiante = {
                matricula: matricula,
                nombre: nombre,
                apellidos: apellidos,
                carrera: carrera
            };
            estudiantes.push(estudiante);
            guardarEnLocalStorage();
            llenaTabla();
            limpiarFormulario();
        } 
    });

    
    function llenaTabla() {
        var body = '';
        for (var i = 0; i < estudiantes.length; i++) {
            body += '<tr><td>' + (i + 1) + '</td><td>' + estudiantes[i].matricula + '</td><td>' + estudiantes[i].nombre + '</td><td>' + estudiantes[i].apellidos + '</td><td>' + estudiantes[i].carrera + '</td><td><button data-indice="' + i + '" class="btn btn-warning btnEditar">Editar</button><button data-indice="' + i + '" class="btn btn-danger btnEl">Eliminar</button></td></tr>';
        }
        document.querySelector('#datos').innerHTML = body;
        asignarEventosEditar();
        asignarEventosEliminar();
    }

    function asignarEventosEditar() {
        var btnEditar = document.querySelectorAll('.btnEditar');
        btnEditar.forEach(function(btn) {
            btn.addEventListener('click', function() {
                var indice = parseInt(btn.getAttribute('data-indice'));
                var estudiante = estudiantes[indice];
                document.getElementById('matricula').value = estudiante.matricula;
                document.getElementById('nombre').value = estudiante.nombre;
                document.getElementById('apellidos').value = estudiante.apellidos;
                document.getElementById('carrera').value = estudiante.carrera;
                estudiantes.splice(indice, 1);
                guardarEnLocalStorage();
                llenaTabla();
            });
        });
    }

    
    function asignarEventosEliminar() {
        var btnEliminar = document.querySelectorAll('.btnEl');
        btnEliminar.forEach(function(btn) {
            btn.addEventListener('click', function() {
                var indice = parseInt(btn.getAttribute('data-indice'));
                estudiantes.splice(indice, 1);
                guardarEnLocalStorage();
                llenaTabla();
            });
        });
    }

   
    function limpiarFormulario() {
        document.getElementById('matricula').value = '';
        document.getElementById('nombre').value = '';
        document.getElementById('apellidos').value = '';
        document.getElementById('carrera').value = '';
    }

    function guardarEnLocalStorage() {
        localStorage.setItem('estudiantes', JSON.stringify(estudiantes));
    }

    function cargarDesdeLocalStorage() {
        var datosGuardados = localStorage.getItem('estudiantes');
        if (datosGuardados) {
            estudiantes = JSON.parse(datosGuardados);
        }
    }
});
