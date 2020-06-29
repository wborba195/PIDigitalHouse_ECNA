let formulario = document.getElementById('formulario');
let caixaDeErros = document.querySelector('.caixa-erro');
let listaDeErros = document.querySelector('.lista-erro');
let erro = document.querySelectorAll('.lista-erro li');
let email = document.getElementById('email');
let senha = document.getElementById('senha');

formulario.addEventListener("submit", function (e) {
    listaDeErros.innerHTML = "";
    e.preventDefault();
    if (email.value == '') {
        listaDeErros.innerHTML += "<li>" + " Campo email não foi preenchido" + "</li>";
    }

    if (senha.value == '') {
        listaDeErros.innerHTML += "<li>" + " Campo senha não foi preenchido" + "</li>";
    } else if (senha.value.length < 7 && senha.value !== '') {
        listaDeErros.innerHTML += "<li>" + "A senha deve ter no mínimo 6 caracteres";
    }
});