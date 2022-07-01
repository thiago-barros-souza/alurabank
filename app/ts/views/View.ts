import { logarTempoDeExecucao } from "../helpers/decorators/index";

export abstract class View<T>
{
    private elementView: JQuery;
    private escapar: boolean;

    constructor(selector: string, escapar: boolean = false)
    {
        this.elementView = $(selector);
        this.escapar = escapar;
    }

    // @logarTempoDeExecucao()
    update(model: T): void
    {
        let template = this.template(model);

        if (this.escapar)
        {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }

        this.elementView.html(template);
    }

    protected abstract template(model: T): string;
}