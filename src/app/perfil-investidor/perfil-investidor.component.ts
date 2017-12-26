import { HttpSelectService } from './../service/http-select.service';
import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { RouterModule, Routes, Router } from '@angular/router';

import { Investimento } from '../model/investimento';

import { Observable } from 'rxjs/Rx';

import { QuestionarioService } from './../service/questionario.service';

@Component({
    selector: 'app-perfil-investidor',
    templateUrl: './perfil-investidor.component.html',
    styleUrls: ['./perfil-investidor.component.scss'],
    providers: [
        HttpSelectService,
        QuestionarioService]
})
export class PerfilInvestidorComponent implements OnInit {
    respostas = [];
    convertida;
    investimentos: Investimento[];

    public perguntasQuestionario1;
    public perguntasQuestionario2;
    public perguntasQuestionario3;

    public dadosSelect;


    ngOnInit() {
        this.getDadosSelect();
        this.getQuestionario1();
        this.getQuestionario2();
        this.getQuestionario3();
    }

    constructor(
        private httpSelectService: HttpSelectService,
        private questionario1: QuestionarioService,
        private questionario2: QuestionarioService,
        private questionario3: QuestionarioService,
        private router: Router) {
        //console.log(this.questionario1.getQuestionatio1());


        console.log(this.perguntasQuestionario1)
    }

    getDadosSelect() {
        this.httpSelectService.getQuestoes()
            .subscribe(
                data => {
                    this.dadosSelect = data
                },
                err => console.error(err)
            );
    }

    getQuestionario1() {
       this.questionario1.getQuestionatio1()
       .subscribe(
           data => {
               this.perguntasQuestionario1 = data
           },
           err => console.error(err)
       )
    }

    getQuestionario2() {
        this.questionario2.getQuestionatio2()
        .subscribe(
            data => {
                this.perguntasQuestionario2 = data
            },
            err => console.error(err)
        )
     }

     getQuestionario3() {
        this.questionario3.getQuestionatio3()
        .subscribe(
            data => {
                this.perguntasQuestionario3 = data
            },
            err => console.error(err)
        )
     }

    registerUser(form: NgForm) {
        this.convertida = JSON.stringify(form.value);

        localStorage.setItem("respostas", this.convertida);

    }

    goNotificacao() {
        this.router.navigate(['notificacao']);
    }

    goHome() {
        this.router.navigate(['home']);
    }
}
