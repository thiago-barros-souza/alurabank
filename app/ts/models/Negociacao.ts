export class Negociacao 
{
    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) { }

    getVolume(): number
    {
        return this.quantidade * this.valor;
    }
}
