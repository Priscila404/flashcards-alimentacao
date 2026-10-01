function mostrarResposta(numero) {

    const resposta = document.getElementById("resposta" + numero);

    const botao = resposta.previousElementSibling;

    if (resposta.style.display === "block") {

        resposta.style.display = "none";

        botao.textContent = "Ver resposta";

    } else {

        resposta.style.display = "block";

        botao.textContent = "Esconder resposta";

    }

}