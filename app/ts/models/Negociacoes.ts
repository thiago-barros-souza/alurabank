import { Igualavel } from './Igualavel';
import { Imprimivel } from './Imprimivel';
import { Negociacao } from './Negociacao';

export class Negociacoes implements Imprimivel, Igualavel<Negociacoes> {
    private listaNegociacao: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao): void {
        this.listaNegociacao.push(negociacao);
    }

    paraArray(): Array<Negociacao> {
        /**
         * Programação defesiva, 
         * vedando possibilidade de alguem pegar a referencia do meu array e realizar modificação
         */
        return ([] as Array<Negociacao>).concat(this.listaNegociacao);
    }

    paraTexto(): void {
        console.log("Imprimindo:");
        console.log(JSON.stringify(this.listaNegociacao));
    }

    ehIgual(negociacoes: Negociacoes): boolean {
        return (
            JSON.stringify(this.paraArray()) === JSON.stringify(negociacoes.paraArray())
        );
    }
}