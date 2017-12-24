import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  getRespostas;
  respostaArray = [];

  constructor() { 
    this.getRespostas = JSON.stringify(localStorage.getItem("respostas"));
    
    //this.respostaArray = JSON.parse("[" + this.getRespostas + "]");

    this.respostaArray.push(JSON.stringify("[" + this.getRespostas + "]"));

    console.log(this.respostaArray);

    this.respostaArray.map(function(obj) {
      console.log(obj.value);
    });


    console.log('tipo de resposta array', this.respostaArray);
  }




}
