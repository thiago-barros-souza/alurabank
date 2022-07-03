import { ApiService } from './ApiService.js';

export class NegociacaoService extends ApiService {
    private uri: string = "/dados";

    obterNegociacao(): Promise<Array<Dado>> {
        return this.get(this.uri)
            .then((response: Response) => this._ehOk(response))
            .then(response => response.json())
            .then((dado: Array<Dado>) => dado)
            .catch(error => {
                console.error(error);
                throw new Error(MessageHelper.FALHA_CONSULTA_DADOS);
            });
    }
}

export interface Dado {
    montante: number;
    vezes: number;
}