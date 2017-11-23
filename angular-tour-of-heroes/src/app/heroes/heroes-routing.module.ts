import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { HeroesComponent } from './heroes.component';

const routes: Routes = Route.withShell([
  { path: 'heroes', component: HeroesComponent, data: { title: extract('Heroes') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HeroesRoutingModule { }
