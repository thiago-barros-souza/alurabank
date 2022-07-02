import { ApiService } from './ApiService';

export class NegociacaoService extends ApiService {
    private uri: string = "/dados";

    obterNegociacao(): Promise<void | Array<Dado>> {
        return this.get(this.uri)
            .then((response: Response) => this._ehOk(response))
            .then(response => response.json())
            .then((dado: Array<Dado>) => dado)
            .catch(error => console.log(console.error(error)));
    }
}

export interface Dado {
    montante: number;
    vezes: number;
}