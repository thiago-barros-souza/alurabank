class DomHelper
{
    static inputBySelector(id: string): HTMLInputElement
    {
        return DomHelper.getBySelector(id);
    }

    static getBySelector(id: string): any
    {
        return document.querySelector(id);
    }
}