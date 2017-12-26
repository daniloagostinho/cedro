import { Injectable } from '@angular/core';

import { Questionario } from './../model/questionario.model';


import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';


@Injectable()
export class QuestionarioService {

constructor(private http:HttpClient) { }

getQuestionatio1() {
    return this.http.get('https://gist.githubusercontent.com/daniloagostinho/0d6d4c324571a1f3a869cdba290dc88e/raw/68b2fec665f2191bdc8315bb56e1ffa44c85d2f6/81f3ce91-e9e9-11e7-8f8e-0ba29d8d90f2.json');
}

getQuestionatio2() {
    return this.http.get('https://gist.githubusercontent.com/daniloagostinho/8f4ade1d11b4f8b444124cee016474e1/raw/d7c71455bf28b6f69d09c7304ae8e75deba79b49/questionario2.json');
}

getQuestionatio3() {
    return this.http.get('https://gist.githubusercontent.com/daniloagostinho/ad86757a9be3ddf3ce28236ed9b426ae/raw/d29400cba4723cb3c24e6810dccbe383c1989769/d310f663-e9eb-11e7-8f8e-3150e1544409.json');
}

}
