import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class HttpSelectService {

  constructor(private http:HttpClient) { }

    getFoods() {
        return this.http.get('https://gist.githubusercontent.com/daniloagostinho/85fdba4e1a4a5972c7be077cf38c6792/raw/d2a7d76b16dfd622f0941f22a6ffa3fd9e216293/blob.json');
    }

}
