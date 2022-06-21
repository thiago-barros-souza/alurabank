class ConversorHelper {
    static getDateBR(date) {
        const newDate = new Date(date);
        return newDate.toLocaleDateString("pt-BR");
    }
}
