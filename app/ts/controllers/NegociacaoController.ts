import { NegociacaoService, Dado } from './../services/NegociacaoService';
import { MensagemView, NegociacoesView } from '../views/index';
import { Negociacao, Negociacoes } from '../models/index';
import { imprimir } from '../helpers/Util';
// import { controllerInicializado, domJqueryProps, logarTempoDeExecucao } from '../helpers/decorators/index';

// @controllerInicializado()
export class NegociacaoController {
    // @domJqueryProps("#data")
    private inputData: JQuery

    // @domJqueryProps("#valor")
    private inputQuantidade: JQuery

    // @domJqueryProps("#quantidade")
    private inputValor: JQuery
    private negociacoes: Negociacoes = new Negociacoes();
    private negociacoesView: NegociacoesView = new NegociacoesView("#negociacoesView");
    private mensagemView: MensagemView = new MensagemView("#mensagemView");

    constructor() {
        this.inputData = $("#data");
        this.inputValor = $("#valor");
        this.inputQuantidade = $("#quantidade");

        this.negociacoesView.update(this.negociacoes);
    }

    // @logarTempoDeExecucao()
    adicionar(): void {
        let data = new Date(this.inputData.val().replace(/-/g, ","));
        let quantidade = parseInt(this.inputQuantidade.val());
        let valor = parseFloat(this.inputValor.val());

        if (this._ehDiaUtil(data)) {
            this.mensagemView.update("Por favor, negociações são permitidas apenas em dias utéis!");
            return;
        }

        const negociacao = new Negociacao(data, quantidade, valor);

        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update(MessageHelper.NEGOCIACAO_SUCESSO);

        imprimir(negociacao, this.negociacoes);
    }

    importar(): void {
        const negociacaoService: NegociacaoService = new NegociacaoService();
        negociacaoService.obterNegociacao()
            .then((response: Array<Dado>) => {
                response.forEach(item => {
                    let negociacao = new Negociacao(new Date(), item.vezes, item.montante);
                    this.negociacoes.adiciona(negociacao);
                    this.negociacoesView.update(this.negociacoes);
                });

                this.mensagemView.update(MessageHelper.NEGOCIACAO_SUCESSO);
            });
    }

    private _ehDiaUtil(data: Date): boolean {
        return data.getDay() != DiaSemana.Domingo && data.getDay() != DiaSemana.Sabado
    }
}

enum DiaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}