import { Component, Injectable } from '@angular/core';

import { NgForm } from '@angular/forms';

import { RouterModule, Routes, Router } from '@angular/router';

@Injectable()
@Component({
  selector: 'app-perfil-investidor',
  templateUrl: './perfil-investidor.component.html',
  styleUrls: ['./perfil-investidor.component.css']
})
export class PerfilInvestidorComponent {
  respostas;
  constructor(private router: Router) { }

  registerUser(form: NgForm) {
    console.log(form.value);
    // {email: '...', password: '...'}
    // ... <-- now use JSON.stringify() to convert form values to json.

    this.respostas = JSON.stringify(form.value);
    console.log('conversao', this.respostas);
  }

  goDashboard() {
    this.router.navigate(['dahsboard']);
  }
}
