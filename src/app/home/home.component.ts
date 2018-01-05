import { Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    user = {
        name: 'Arthur',
        age: 42
      };

    showDialog;
    constructor(
        private router: Router,
        private translate: TranslateService) {
        translate.setDefaultLang('pt-BR');
    }

    switchLanguage(language: string) {
        this.translate.use(language);
    }

    goPerfil() {
        localStorage.setItem('access_token', "Permissão pra acessa o Perfil Investidor");
        this.router.navigate(['perfil-investidor']);
    }
}
