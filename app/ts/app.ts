const negociacaoController = new NegociacaoController();

// Usando JQuery
$(".form")
    .submit(negociacaoController.adicionar.bind(negociacaoController));