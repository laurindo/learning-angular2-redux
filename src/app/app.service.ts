import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
    
    private _url: string = 'assets/mock.json';

    constructor(private _http: Http) { }
    
    someMethod() {
        console.log("HEy")
        return "Hey!!!";
    }

    getSomething() {
        return this._http.get(this._url)
            .map((response:Response) => response.json());
    }
}