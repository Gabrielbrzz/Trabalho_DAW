function enviarMensagem(event) {
    event.preventDefault();
    alert("Mensagem enviada com sucesso!");
    document.getElementById("contact-form").reset();
}
