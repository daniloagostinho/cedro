import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilInvestidorComponent } from './perfil-investidor/perfil-investidor.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificacaoComponent } from './notificacao/notificacao.component';
import { Page404Component } from './page-404/page-404.component';
import { Page401Component } from './page-401/page-401.component';

const routes: Routes = [
    { path: 'perfil-investidor',
    component: PerfilInvestidorComponent,
    canActivate: [AuthGuard], },
    { path: 'home', component: HomeComponent },
    { path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard], },
    { path: 'notificacao',
    component: NotificacaoComponent,
    canActivate: [AuthGuard] },
    { path: '', component: HomeComponent, pathMatch: 'full' },
    {path: '404', component: Page404Component},
    {path: '401', component: Page401Component},
    {path: '**', redirectTo: '/404'}
  ];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
