function respostaIncorreta() {
    alert("Você errou, tente novamente!")
}

function enviarQuestionario() {
    alert("Obrigado pela participação!");
}


const acerto = document.getElementById("correta");
function respostaCorreta() {
    acerto.classList.add("acerto");
    alert("Parabéns, você acertou!");
}
