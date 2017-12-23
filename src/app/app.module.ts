import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { PerfilInvestidorComponent } from './perfil-investidor/perfil-investidor.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'perfil', component: PerfilInvestidorComponent },
  { path: 'dahsboard', component: DashboardComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
];



@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    HomeComponent,
    PerfilInvestidorComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
