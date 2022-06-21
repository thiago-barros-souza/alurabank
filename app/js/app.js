const negociacaoController = new NegociacaoController();
$(".form")
    .submit(negociacaoController.adicionar.bind(negociacaoController));
