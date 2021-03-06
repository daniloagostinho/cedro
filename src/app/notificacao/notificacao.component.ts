import { DashboardComponent } from './../dashboard/dashboard.component';
import { Component } from '@angular/core';

import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.component.html',
  styleUrls: ['./notificacao.component.scss']
})
export class NotificacaoComponent {

  constructor(private router: Router) {

  setTimeout(() => {
      localStorage.setItem('access_token', "Permissão pra acessa o dashboard");
      this.router.navigate(['dashboard']);
   }, 2200);
  }
}
