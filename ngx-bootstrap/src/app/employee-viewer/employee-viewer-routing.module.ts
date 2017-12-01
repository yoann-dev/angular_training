import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { EmployeeViewerComponent } from './employee-viewer.component';

const routes: Routes = Route.withShell([
  { path: 'employee-viewer', component: EmployeeViewerComponent, data: { title: 'Employee Viewer' } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class EmployeeViewerRoutingModule { }
