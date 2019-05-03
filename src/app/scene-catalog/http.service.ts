import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

@Injectable()
export class HttpService {
    searchEndpoint = 'https://1yaf2o5ra7.execute-api.us-west-2.amazonaws.com/Production/search';
    getFavoritesEndpoint = 'https://1yaf2o5ra7.execute-api.us-west-2.amazonaws.com/Production/check-user-favs';
    addFavoritesEndpoint = 'https://1yaf2o5ra7.execute-api.us-west-2.amazonaws.com/Production/add-scene';
    getSceneEndpoint = 'https://1yaf2o5ra7.execute-api.us-west-2.amazonaws.com/Production/item';

    constructor(private http: Http) {}

    getItems(body: string) {
        const headersOpt = new Headers({'Content-Type': 'application/json'});
        return this.http.get(this.searchEndpoint + body, {headers: headersOpt});
    }

    getScene(body: string) {
        const headersOpt = new Headers({'Content-Type': 'application/json'});
        return this.http.get(this.getSceneEndpoint + body, {headers: headersOpt})
    }

    getFavorites(body: string) {
        const headersOpt = new Headers({'Content-Type': 'application/json'});
        return this.http.get(this.getFavoritesEndpoint + body, {headers: headersOpt})
    }

    addFavorites(body: string) {
        const headersOpt = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.addFavoritesEndpoint + body, {headers: headersOpt})
    }
}
