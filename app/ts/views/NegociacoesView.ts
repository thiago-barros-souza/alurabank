class NegociacoesView extends View<Negociacoes>
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
                                <td>${ConversorHelper.getDateBR(model.getData())}</td>
                                <td>${model.getQuantidade()}</td>
                                <td>${model.getValor()}</td>
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