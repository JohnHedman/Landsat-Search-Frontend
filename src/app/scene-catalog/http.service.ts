import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

@Injectable()
export class HttpService {
    apigatewayendpoint = 'https://1yaf2o5ra7.execute-api.us-west-2.amazonaws.com/Production/search';

    constructor(private http: Http) {}

    getItems(body: string) {
        const headersOpt = new Headers({'Content-Type': 'application/json'});
        return this.http.get(this.apigatewayendpoint + body, {headers: headersOpt});
    }
}
