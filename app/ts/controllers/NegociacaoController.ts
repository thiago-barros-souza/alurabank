import { DiaSemana } from '../models/enums/DiasSemana.js';
import { NegociacaoService, Dado } from '../services/NegociacaoService.js';
import { MensagemView, NegociacoesView } from '../views/index.js';
import { Negociacao, Negociacoes } from '../models/index.js';
import { imprimir } from '../helpers/Util.js';
// import { controllerInicializado, domJqueryProps, logarTempoDeExecucao } from '../helpers/decorators/index.js';

// @controllerInicializado()
export class NegociacaoController {
    // @domJqueryProps("#data")
    private _inputData: JQuery

    // @domJqueryProps("#valor")
    private _inputQuantidade: JQuery

    // @domJqueryProps("#quantidade")
    private _inputValor: JQuery
    private _negociacoes: Negociacoes = new Negociacoes();
    private _negociacoesView: NegociacoesView = new NegociacoesView("#negociacoesView");
    private _mensagemView: MensagemView = new MensagemView("#mensagemView");

    constructor() {
        this._inputData = $("#data");
        this._inputValor = $("#valor");
        this._inputQuantidade = $("#quantidade");
        this._negociacoesView.update(this._negociacoes);
    }

    // @logarTempoDeExecucao()
    adicionar(): void {
        let data = new Date(this._inputData.val().replace(/-/g, ","));
        let quantidade = parseInt(this._inputQuantidade.val());
        let valor = parseFloat(this._inputValor.val());

        if (this._ehDiaUtil(data)) {
            this._mensagemView.update("Por favor, negociações são permitidas apenas em dias utéis!");
            return;
        }

        const negociacao = new Negociacao(data, quantidade, valor);

        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update(MessageHelper.NEGOCIACAO_SUCESSO);

        imprimir(negociacao, this._negociacoes);
    }

    async importar(): Promise<void> {
        try {
            const negociacaoService: NegociacaoService = new NegociacaoService();
            const negociacoesParaImportar = await negociacaoService.obterNegociacao();

            negociacoesParaImportar.forEach(item => {
                let negociacao = new Negociacao(new Date(), item.vezes, item.montante);
                this._negociacoes.adiciona(negociacao);
                this._negociacoesView.update(this._negociacoes);
            });

            this._mensagemView.update(MessageHelper.NEGOCIACAO_SUCESSO);
        }
        catch (error) {
            this._mensagemView.update(error.message);
        }
    }

    private _ehDiaUtil(data: Date): boolean {
        return data.getDay() != DiaSemana.Domingo && data.getDay() != DiaSemana.Sabado
    }
}