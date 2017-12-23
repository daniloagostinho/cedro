import { Injectable } from '@angular/core';

import { Investimento } from './../model/investimento';

@Injectable()
export class SelectService {
  getQuestionatio1() {
    return [
      new Investimento('Preservar meu dinheiro' ),
      new Investimento('Ganhar mais dinheiro' ),
      new Investimento('Ganhar mais dinheiro' ),
    ]
  }
  getInvestimento() {
    return [
     new Investimento('Nunca operei' ),
     new Investimento('Opero pouco e não tenho familiaridade' ),
     new Investimento('Opero eventualmente e conheço os riscos associados' ),
     new Investimento('Opero frequentemente e conheço os riscos associados' )
    ];
  }
  constructor() { }
}