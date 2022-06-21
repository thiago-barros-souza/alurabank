class View {
    constructor(selector) {
        this.elementView = $(selector);
    }
    update(model) {
        this.elementView.html(this.template(model));
    }
}
