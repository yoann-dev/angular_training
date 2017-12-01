import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeViewerComponent } from './employee-viewer.component';
import { EmployeeViewerRoutingModule } from './employee-viewer-routing.module';
import { EmployeeService } from './employee.service';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    EmployeeViewerRoutingModule
  ],
  declarations: [EmployeeViewerComponent],
  providers: [EmployeeService]
})
export class EmployeeViewerModule { }
