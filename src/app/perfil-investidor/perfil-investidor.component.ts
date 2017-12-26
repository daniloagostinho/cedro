import { HttpSelectService } from './../service/http-select.service';
import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { RouterModule, Routes, Router } from '@angular/router';

import { Investimento } from '../model/investimento';

import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-perfil-investidor',
  templateUrl: './perfil-investidor.component.html',
  styleUrls: ['./perfil-investidor.component.scss'],
  providers: [HttpSelectService]
})
export class PerfilInvestidorComponent implements OnInit {
  respostas = [];
  convertida;
  investimentos: Investimento[];

  public dadosSelect;

  ngOnInit() {
    this.getDadosSelect();
  }

  constructor(
    private httpSelectService: HttpSelectService,
    private router: Router) {
    }

    getDadosSelect() {
    this.httpSelectService.getQuestoes()
    .subscribe(
            data => { this.dadosSelect = data},
            err => console.error(err)
          );
        }

  registerUser(form: NgForm) {
    this.convertida = JSON.stringify(form.value);

    localStorage.setItem("respostas", this.convertida);

  }

  goNotificacao() {
    this.router.navigate(['notificacao']);
  }

  goHome(){
    this.router.navigate(['home']);
  }
}
