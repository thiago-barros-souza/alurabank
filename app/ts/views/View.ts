export abstract class View<T>
{
    private elementView: JQuery;

    constructor(selector: string)
    {
        this.elementView = $(selector);
    }

    update(model: T): void
    {
        this.elementView.html(this.template(model));
    }

    protected abstract template(model: T): string;
}