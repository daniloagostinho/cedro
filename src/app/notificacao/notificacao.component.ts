import { DashboardComponent } from './../dashboard/dashboard.component';
import { Component } from '@angular/core';

import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.component.html',
  styleUrls: ['./notificacao.component.css']
})
export class NotificacaoComponent {

  constructor(private router: Router) { 

  setTimeout(() => { 
  	this.router.navigate(['dahsboard']);
   }, 2200);
  }


}
