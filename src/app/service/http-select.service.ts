import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class HttpSelectService {

  constructor(private http:HttpClient) { }

    getQuestoes() {
        return this.http.get('https://gist.githubusercontent.com/daniloagostinho/85fdba4e1a4a5972c7be077cf38c6792/raw/8ba9229c19808da2718b1e6af41ce099d75e2ddb/blob.json');
    }

}
