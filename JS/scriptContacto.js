function guardarDatos() {
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById('name').value;
    var correo = document.getElementById('email').value;
    var telefono = document.getElementById('tel').value;

    // Crear un objeto con los datos del formulario
    var userData = {
        nombre: nombre,
        correo: correo,
        telefono: telefono
    };

    // Convertir el objeto a formato JSON
    var jsonData = JSON.stringify(userData);

    // Crear un Blob con los datos JSON
    var blob = new Blob([jsonData], { type: 'application/json' });

    // Crear un objeto URL para el Blob
    var url = URL.createObjectURL(blob);

    // Crear un elemento <a> para el enlace de descarga
    var a = document.createElement('a');
    a.href = url;
    a.download = 'datos_usuario.json';

    // Agregar el elemento <a> al DOM
    document.body.appendChild(a);

    // Simular un clic en el enlace para iniciar la descarga
    a.click();

    // Limpiar después de la descarga
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}