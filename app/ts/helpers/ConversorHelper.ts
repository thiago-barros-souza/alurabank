class ConversorHelper 
{
    static getDateBR(date: Date)
    {
        const newDate = new Date(date);
        return newDate.toLocaleDateString("pt-BR");
    }
}