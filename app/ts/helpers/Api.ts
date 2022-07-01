export class Api
{
    private urlBase: string = "http://localhost:8080";

    getDados(): Promise<Response>
    {
        return this._request(this.urlBase + "/dados");
    }

    private _request(url: string): Promise<Response>
    {
        return fetch(this.urlBase + "/dados");
    }
}