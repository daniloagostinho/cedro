import { AppRoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { PerfilInvestidorComponent } from './perfil-investidor/perfil-investidor.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificacaoComponent } from './notificacao/notificacao.component';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { Page404Component } from './page-404/page-404.component';
import { Page401Component } from './page-401/page-401.component';

//criar um arquivo app.routing e importar aqui..

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    HomeComponent,
    PerfilInvestidorComponent,
    DashboardComponent,
    NotificacaoComponent,
    Page404Component,
    Page401Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
