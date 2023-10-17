function calc(num) {
    document.querySelector(".tela").innerHTML += num ;
}

function limpar (){
    document.querySelector(".tela").innerHTML = "";
}

function apagar (){
    let apaga = document.querySelector(".tela").innerHTML;
    document.querySelector(".tela").innerHTML = apaga.substring(0 , apaga.length - 1);
}

function calcular() {
    let expressao = document.querySelector(".tela").innerHTML;
    try {
        document.querySelector(".tela").innerHTML = eval(expressao);
    } catch (error) {
        document.querySelector(".tela").innerHTML = "Erro";
    }
}
