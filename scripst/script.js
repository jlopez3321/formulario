/*
Cada vez que los campos NOMBRE y APELLIDOS pierdan el foco, el contenido que se haya 
escrito en esos campos se convertirá a mayúsculas
*/
var nombre = document.getElementById("nombre");
// Utilizamos la función toUpperCase() para convertir a mayúsculas
nombre.addEventListener("blur", function() {
    nombre.value = nombre.value.toUpperCase();
});

var apellidos = document.getElementById("apellidos");

apellidos.addEventListener("blur", function() {
    apellidos.value = apellidos.value.toUpperCase();
});


const pattern1 = /^[a-zA-ZÀ-ÿ\s]$/; // Letras y espacios, pueden llevar acentos.
const pattern2 = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/; // Patrón para verificar email
const pattern3 = /^(\d{8})([-]?)([A-Z]{1})$/; // Patrón para verificar dni

function validarForm() {
    let x = document.forms["formulario"]["nombre"].value;
    let y = document.forms["formulario"]["apellidos"].value;
    let z = document.forms["formulario"]["nif"].value;
    let t = document.forms["formulario"]["email"].value;
    if (!(pattern1.test(x) && pattern2.test(y))) {
        alert("Los campos Nombre y Apellidos no aceptan números!");
        return false;
    }

    if (!pattern3.test(z)) {
        alert("DNI incorrecto");
        return false;
    }

    if (!pattern2.test(z)) {
        alert("Email incorrecto");
        return false;
    }
}