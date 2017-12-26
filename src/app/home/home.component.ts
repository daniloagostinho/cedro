import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showDialog;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goPerfil() {
    localStorage.setItem('access_token', "Permissão pra acessa o Perfil Investidor");
    this.router.navigate(['perfil-investidor']);
  }
}
