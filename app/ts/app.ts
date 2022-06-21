const negociacaoController = new NegociacaoController();

document.querySelector(".form")
    .addEventListener("submit", negociacaoController.adicionar.bind(negociacaoController));