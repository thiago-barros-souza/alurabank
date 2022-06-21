class NegociacaoController
{
    private inputData: HTMLInputElement
    private inputQuantidade: HTMLInputElement
    private inputValor: HTMLInputElement
    private negociacoes: Negociacoes = new Negociacoes();
    private negociacoesView: NegociacoesView = new NegociacoesView("#negociacoesView");
    private mensagemView: MensagemView = new MensagemView("#mensagemView");

    constructor()
    {
        this.inputData = <HTMLInputElement>DomHelper.inputBySelector("#data");
        this.inputValor = <HTMLInputElement>DomHelper.inputBySelector("#valor");
        this.inputQuantidade = <HTMLInputElement>DomHelper.inputBySelector("#quantidade");

        this.negociacoesView.update(this.negociacoes);
    }

    adicionar(event: Event): void
    {
        event.preventDefault();

        const negociacao = new Negociacao(
            new Date(this.inputData.value.replace(/-/g, ",")),
            parseInt(this.inputQuantidade.value),
            parseFloat(this.inputValor.value)
        );

        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update(MessageHelper.NEGOCIACAO_SUCESSO);
    }
}