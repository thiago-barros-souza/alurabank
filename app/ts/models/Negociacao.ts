import { Igualavel } from './Igualavel';
import { Imprimivel } from './Imprimivel';
export class Negociacao implements Imprimivel, Igualavel<Negociacao> {
    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) { }

    getVolume(): number {
        return this.quantidade * this.valor;
    }

    paraTexto(): void {
        console.log("Imprimindo:");
        console.log(`
            Negociação:
            Data: ${this.data}
            Valor: ${this.valor}
            Quantidade: ${this.quantidade}
        `);
    }

    ehIgual(negociacao: Negociacao): boolean {
        return (
            this.data.getDate() == negociacao.data.getDate() &&
            this.data.getMonth() == negociacao.data.getMonth() &&
            this.data.getFullYear() == negociacao.data.getFullYear()
        );
    }
}
