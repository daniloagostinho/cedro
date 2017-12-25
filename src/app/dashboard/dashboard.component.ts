import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  getRespostas;
  respostaObjeto;
  keys;
  message;

  constructor() {
    this.getRespostas = JSON.parse(localStorage.getItem("respostas"));
    console.log(this.getRespostas);

    if(this.hasChaveLocalStorage("respostas")) {
      this.keys = Object.keys(this.getRespostas).map(key => key);
    } else {
      this.message = "Não existe resposta";
    }

    console.log(this.hasChaveLocalStorage("respostas"));
    console.log(this.hasChaveLocalStorage("teste"));
  }

  public hasChaveLocalStorage(key: string):boolean {
    return !!localStorage.getItem(key)
  }
}
