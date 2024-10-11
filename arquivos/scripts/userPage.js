window.onload = function () {
    document.getElementById("add_dispositivo").addEventListener('click', () => {
        document.getElementById("form_add_dispositivo").style.display = 'block';
    });
    document.getElementById("add_dispositivo_voltar").addEventListener('click', () => {
        document.getElementById("form_add_dispositivo").style.display = 'none';
        document.getElementById("formulario_dispositivo").reset();
    });
    document.getElementById("add_alarme").addEventListener('click', addAlarme);
};

const dispositivos = [];

function addAlarme(event) {
    event.preventDefault();
    let formulario = document.getElementById("formulario_dispositivo");
    const dispositivo = {
        "nome": formulario.form_disp_nome.value,
        "som": formulario.form_disp_som.value,
        "cor": formulario.form_disp_cor.value
    };
    dispositivos.push(dispositivo);
    addDispositivo(dispositivo);
    formulario.reset();
    document.getElementById("form_add_dispositivo").style.display = 'none';
}

function addDispositivo(dispositivo){
    let novo_dispositivo = document.createElement("div");
    novo_dispositivo.classList.add("label_dispositivo");
    novo_dispositivo.style.backgroundColor = dispositivo.cor;
    let nome_dispositivo = document.createElement("h2");
    nome_dispositivo.classList.add("nome_dispositivo");
    nome_dispositivo.innerText = dispositivo.nome;
    novo_dispositivo.appendChild(nome_dispositivo);
    let lista_dispositivos = document.getElementById("lista_dispositivos");
    lista_dispositivos.appendChild(document.createElement("li").appendChild(novo_dispositivo));
}