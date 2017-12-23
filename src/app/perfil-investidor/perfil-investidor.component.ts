import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';

import { RouterModule, Routes, Router } from '@angular/router';

import { SelectService } from './../service/select.service';
import { Investimento } from '../model/investimento';

@Component({
  selector: 'app-perfil-investidor',
  templateUrl: './perfil-investidor.component.html',
  styleUrls: ['./perfil-investidor.component.css'],
  providers: [SelectService]
})
export class PerfilInvestidorComponent{
  respostas = [];
  convertida;
  investimentos: Investimento[];

  constructor(
    private selectService: SelectService,
    private router: Router) { 
      this.investimentos = this.selectService.getInvestimento();
    }

  registerUser(form: NgForm) {
    console.log(form.value);

    this.respostas.push(form.value);
    
    //
    //console.log('conversao', this.respostas);

    console.log(this.respostas);

    //conversao do obj recebido para array
    this.convertida = this.respostas
    .map((obj =>  {
      return Object.keys(obj).map((chave) => {
          return obj[chave];
      });
    }));

  console.log('>>>> convertida', this.convertida);
  }

  goDashboard() {
    this.router.navigate(['dahsboard']);
  }
}
