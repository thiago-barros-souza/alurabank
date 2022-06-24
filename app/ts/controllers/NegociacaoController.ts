import { MensagemView, NegociacoesView } from '../views/index';
import { Negociacao, Negociacoes } from '../models/index';

export class NegociacaoController
{
    private inputData: JQuery
    private inputQuantidade: JQuery
    private inputValor: JQuery
    private negociacoes: Negociacoes = new Negociacoes();
    private negociacoesView: NegociacoesView = new NegociacoesView("#negociacoesView");
    private mensagemView: MensagemView = new MensagemView("#mensagemView");

    constructor()
    {
        this.inputData = $("#data");
        this.inputValor = $("#valor");
        this.inputQuantidade = $("#quantidade");

        this.negociacoesView.update(this.negociacoes);
    }

    adicionar(event: Event): void
    {
        event.preventDefault();

        const negociacao = new Negociacao(
            new Date(this.inputData.val().replace(/-/g, ",")),
            parseInt(this.inputQuantidade.val()),
            parseFloat(this.inputValor.val())
        );

        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update(MessageHelper.NEGOCIACAO_SUCESSO);
    }
}