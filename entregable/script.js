const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let producto = document.getElementById("producto").value;
    let mensaje = document.getElementById("mensaje").value;

    alert(
        "Nombre: " + nombre +
        "\nCorreo: " + correo +
        "\nProducto: " + producto +
        "\nMensaje: " + mensaje
    );

});