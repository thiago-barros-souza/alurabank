class NegociacaoController
{
    private inputData: HTMLInputElement
    private inputQuantidade: HTMLInputElement
    private inputValor: HTMLInputElement

    constructor()
    {
        this.inputData = <HTMLInputElement>DomHelper.inputBySelector("#data");
        this.inputValor = <HTMLInputElement>DomHelper.inputBySelector("#valor");
        this.inputQuantidade = <HTMLInputElement>DomHelper.inputBySelector("#quantidade");
    }

    adicionar(event: Event)
    {
        event.preventDefault();

        const negociacao = new Negociacao(
            new Date(this.inputData.value.replace(/-/g, ",")),
            parseInt(this.inputQuantidade.value),
            parseFloat(this.inputValor.value)
        );

        console.log(negociacao);
    }
}