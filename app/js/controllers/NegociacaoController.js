class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView("#negociacoesView");
        this.mensagemView = new MensagemView("#mensagemView");
        this.inputData = DomHelper.inputBySelector("#data");
        this.inputValor = DomHelper.inputBySelector("#valor");
        this.inputQuantidade = DomHelper.inputBySelector("#quantidade");
        this.negociacoesView.update(this.negociacoes);
    }
    adicionar(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this.inputData.value.replace(/-/g, ",")), parseInt(this.inputQuantidade.value), parseFloat(this.inputValor.value));
        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update(MessageHelper.NEGOCIACAO_SUCESSO);
    }
}
