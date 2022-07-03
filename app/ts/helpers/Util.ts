import { Imprimivel } from '../models/Imprimivel.js';

export function imprimir(...args: Array<Imprimivel>) {
    args.forEach(i => i.paraTexto());
}