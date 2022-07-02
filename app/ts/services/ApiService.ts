export class ApiService {
    private urlBase: string = "http://localhost:8080";

    get(uri: string): Promise<Response> {
        return this._request(this.urlBase + uri);
    }

    private _request(uri: string): Promise<Response> {
        return fetch(this.urlBase + uri);
    }

    protected _ehOk(res: Response): Response {
        if (!res.ok) {
            throw new Error(MessageHelper.FALHA_API);
        }

        return res;
    }
}

// export interface HandleFunction {
//     (response: Response): Response;
// }