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
    this.getFoods();
  }

  constructor(
    private httpSelectService: HttpSelectService,
    private router: Router) {
    }

    getFoods() {
    this.httpSelectService.getFoods()
    .subscribe(
            data => { this.dadosSelect = data},
            err => console.error(err),
            () => console.log('done loading foods')
          );
        }

  registerUser(form: NgForm) {
    console.log(form.value);
    this.convertida = JSON.stringify(form.value);

    console.log('>>>> convertida', this.convertida);
    //salva no localstorage
    localStorage.setItem("respostas", this.convertida);

  }

  goNotificacao() {
    this.router.navigate(['notificacao']);
  }

  goHome(){
    this.router.navigate(['home']);
  }
}
