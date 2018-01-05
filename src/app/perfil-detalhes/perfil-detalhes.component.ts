import { Component, OnInit } from '@angular/core';

export class User {
    id: number;
    name: string;
    username: string;
    avatar: string;
}

const detalhePerfil: User[] = [
    {
        id: 1,
        name: 'William',
        username: '@w_oliveiras ',
        avatar: 'https://pbs.twimg.com/profile_images/913823639027535874/OstMeh7i_400x400.jpg'
    },
    {
        id: 2,
        name: 'Wendell Adriel',
        username: '@wendell_adriel',
        avatar: 'https://pbs.twimg.com/profile_images/883461562425626624/M0wePcI3_400x400.jpg'
    },
    {
        id: 2,
        name: 'Andréa Zambrana',
        username: '@akfzambrana',
        avatar: 'https://pbs.twimg.com/profile_images/851173327507001344/lyqWikBV_400x400.jpg'
    }
]


@Component({
    selector: 'app-perfil-detalhes',
    templateUrl: './perfil-detalhes.component.html',
    styleUrls: ['./perfil-detalhes.component.scss']
})

export class PerfilDetalhesComponent implements OnInit {

    constructor() { }

    detalhes: User[] = detalhePerfil;

    ngOnInit() {
        console.log(this.detalhes)
    }

}
