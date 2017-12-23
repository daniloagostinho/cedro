import { Component, OnInit} from '@angular/core';

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
export class PerfilInvestidorComponent implements OnInit{
  respostas;
  investimentos: Investimento[];

  constructor(
    private selectService: SelectService,
    private router: Router) { 
      this.investimentos = this.selectService.getInvestimento();
    }

    ngOnInit() {
      console.log(this.investimentos);
    }

  registerUser(form: NgForm) {
    console.log(form.value);

    this.respostas = JSON.stringify(form.value);
    console.log('conversao', this.respostas);
  }

  goDashboard() {
    this.router.navigate(['dahsboard']);
  }
}
