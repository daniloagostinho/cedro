import { Injectable } from '@angular/core';

import { Questionario } from './../model/questionario.model';

@Injectable()
export class QuestionarioService {

getQuestionatio1() {
    return [
      new Questionario('Preservar meu dinheiro'),
      new Questionario('Ganhar mais dinheiro'),
      new Questionario('Ganhar mais dinheiro'),
    ]
  }
  
}