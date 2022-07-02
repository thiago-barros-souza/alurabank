import { Imprimivel } from './../models/Imprimivel';

export function imprimir(...args: Array<Imprimivel>) {
    args.forEach(i => i.paraTexto());
}