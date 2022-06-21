class Negociacoes {
    constructor() {
        this.listaNegociacao = [];
    }
    adiciona(negociacao) {
        this.listaNegociacao.push(negociacao);
    }
    paraArray() {
        /**
         * Programação defesiva,
         * vedando possibilidade de alguem pegar a referencia do meu array e realizar modificação
         */
        return [].concat(this.listaNegociacao);
    }
}
