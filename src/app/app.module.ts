import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { PerfilInvestidorComponent } from './perfil-investidor/perfil-investidor.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    HomeComponent,
    PerfilInvestidorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
