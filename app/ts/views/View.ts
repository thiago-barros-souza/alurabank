abstract class View<T>
{
    private elementView: Element;

    constructor(selector: string)
    {
        this.elementView = DomHelper.getBySelector(selector);
    }

    update(model: T): void
    {
        this.elementView.innerHTML = this.template(model);
    }

    protected abstract template(model: T): string;
}