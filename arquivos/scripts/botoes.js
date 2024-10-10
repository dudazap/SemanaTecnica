function carregar(){
    document.getElementById("btn_login").addEventListener('click', () => {
        window.location.href = './service/login.html';
    });
    document.getElementById("btn_cadastro").addEventListener('click', () => {
        window.location.href = './service/cadastrese.html'
    });
    menu();
}

function menu(){
    document.getElementById("icone_menu").addEventListener('click', () => {
        let menu = document.getElementById('menu_inicial');
        if(menu.style.display === 'none') {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    });
}

function botaoEntrar(){
    document.getElementById("login_botao_entrar").addEventListener('click', login);
}

function login(event){
    event.preventDefault();
    window.location.href = './userarea/userpage.html';
}