class Negociacao 
{
    constructor(private data: Date, private quantidade: number, private valor: number) { }

    getData()
    {
        return this.data;
    }

    getQuantidade()
    {
        return this.quantidade;
    }

    getValor()
    {
        return this.valor;
    }

    getVolume()
    {
        return this.quantidade * this.valor;
    }
}
