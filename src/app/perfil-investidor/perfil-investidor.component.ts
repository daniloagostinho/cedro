import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-perfil-investidor',
  templateUrl: './perfil-investidor.component.html',
  styleUrls: ['./perfil-investidor.component.css']
})
export class PerfilInvestidorComponent {
  conversao;
  constructor() { }

  registerUser(form: NgForm) {
    console.log(form.value);
    // {email: '...', password: '...'}
    // ... <-- now use JSON.stringify() to convert form values to json.

    this.conversao = JSON.stringify(form.value);
    console.log('conversao', this.conversao);
  }

}
