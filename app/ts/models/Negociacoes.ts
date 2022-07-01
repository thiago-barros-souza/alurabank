import { Negociacao } from './Negociacao';

export class Negociacoes
{
    private listaNegociacao: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao): void
    {
        this.listaNegociacao.push(negociacao);
    }

    paraArray(): Array<Negociacao>
    {
        /**
         * Programação defesiva, 
         * vedando possibilidade de alguem pegar a referencia do meu array e realizar modificação
         */
        return ([] as Array<Negociacao>).concat(this.listaNegociacao);
    }
}