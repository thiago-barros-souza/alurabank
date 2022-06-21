class DomHelper {
    static inputBySelector(id) {
        return DomHelper.getBySelector(id);
    }
    static getBySelector(id) {
        return document.querySelector(id);
    }
}
