class NegociacaoController {
    constructor() {
        this.inputData = DomHelper.inputBySelector("#data");
        this.inputValor = DomHelper.inputBySelector("#valor");
        this.inputQuantidade = DomHelper.inputBySelector("#quantidade");
    }
    adicionar(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this.inputData.value.replace(/-/g, ",")), parseInt(this.inputQuantidade.value), parseFloat(this.inputValor.value));
        console.log(negociacao);
    }
}
