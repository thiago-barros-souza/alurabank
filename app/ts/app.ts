import { NegociacaoController } from './controllers/NegociacaoController';

const negociacaoController = new NegociacaoController();

// Usando JQuery
$(".form").on("submit", (event: Event) =>
{
    event.preventDefault();
    negociacaoController.adicionar();
});

$("#import-data").on('click', (event: Event) => 
{
    negociacaoController.importar();
});