function respostaIncorreta() {
    alert("Você errou, tente novamente!")
}

function respostaCorreta() {
    let acerto = document.getElementById("correta");
    acerto.style.color = "blue";
    acerto.style.fontWeight = "bold";
    acerto.style.textDecoration = "underline";
    alert("Parabéns, você acertou!")
}

function enviarQuestionario() {
    alert("Obrigado pela participação!")
}
