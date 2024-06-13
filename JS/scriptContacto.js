function saveFormData() {
    // Obtener valores de los campos
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var tel = document.getElementById('tel').value;

    // Crear un objeto con los datos del formulario
    var formData = {
        Nombre: name,
        Email: email,
        'Número de teléfono': tel
    };

    // Convertir los datos a formato CSV
    var csv = Object.keys(formData).map(key => `${key},${formData[key]}`).join('\n');

    // Crear un enlace de descarga para el archivo CSV
    var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    var link = document.createElement('a');
    if (link.download !== undefined) { // Verificar soporte para la descarga
        var url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', 'formulario.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        alert('Descarga de archivos no soportada en este navegador.');
    }
}