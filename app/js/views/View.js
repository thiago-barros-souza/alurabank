class View {
    constructor(selector) {
        this.elementView = DomHelper.getBySelector(selector);
    }
    update(model) {
        this.elementView.innerHTML = this.template(model);
    }
}
