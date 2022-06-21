class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView("#negociacoesView");
        this.mensagemView = new MensagemView("#mensagemView");
        this.inputData = $("#data");
        this.inputValor = $("#valor");
        this.inputQuantidade = $("#quantidade");
        this.negociacoesView.update(this.negociacoes);
    }
    adicionar(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this.inputData.val().replace(/-/g, ",")), parseInt(this.inputQuantidade.val()), parseFloat(this.inputValor.val()));
        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update(MessageHelper.NEGOCIACAO_SUCESSO);
    }
}
