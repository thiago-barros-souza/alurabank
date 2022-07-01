export function domJqueryProps(seletor: string)
{
    return function (target: any, key: string)
    {
        let element: JQuery;
        const getter = function ()
        {
            if (!element)
            {
                console.log(`buscando  ${seletor} para injetar em ${key}`);
                element = $(seletor);
            }

            return element;
        };
        const attrs = { get: getter };

        Object.defineProperty(target, key, attrs);
    }
}