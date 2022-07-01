import { Negociacao } from './../models/Negociacao';
import { Negociacoes } from './../models/Negociacoes';
import { View } from "./View";

export class NegociacoesView extends View<Negociacoes>
{
    protected template(model: Negociacoes): string
    {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>

                <tbody>
                    ${model.paraArray().map((model: Negociacao) =>
                        `
                            <tr>
                                <td>${ConversorHelper.getDateBR(model.data)}</td>
                                <td>${model.quantidade}</td>
                                <td>${model.valor}</td>
                                <td>${model.getVolume()}</td>
                            </tr>
                        `
                    ).join("")}
                </tbody>

                <tfoot>
                </tfoot>
            </table>  
        `;
    }
}