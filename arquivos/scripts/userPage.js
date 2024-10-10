window.onload = function () {
    document.getElementById("add_dispositivo").addEventListener('click', () => {
        document.getElementById("form_add_dispositivo").style.display = 'block';
    });
    document.getElementById("add_dispositivo_voltar").addEventListener('click', () => {
        document.getElementById("form_add_dispositivo").style.display = 'none';
        document.getElementById("formulario_dispositivo").reset();
    });
};