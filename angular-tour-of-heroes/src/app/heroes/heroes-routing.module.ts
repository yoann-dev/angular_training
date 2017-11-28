import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component'
import { HeroDetailComponent } from './hero-detail.component'

const routes: Routes = Route.withShell([
  { path: 'dashboard', component: DashboardComponent, data: { title: extract('Dashboard') } },
  { path: 'heroes', component: HeroesComponent, data: { title: extract('Heroes') } },
  { path: 'detail/:id', component: HeroDetailComponent,  data: { title: extract('Details') } },
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HeroesRoutingModule { }
