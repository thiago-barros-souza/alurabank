class Negociacoes {
    constructor() {
        this.listaNegociacao = [];
    }
    adiciona(negociacao) {
        this.listaNegociacao.push(negociacao);
    }
    paraArray() {
        return [].concat(this.listaNegociacao);
    }
}
