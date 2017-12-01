import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { debounceTime } from 'rxjs/operator/debounceTime';
import { EmployeeService, Employee } from './employee.service';

@Component({
  selector: 'app-employee-viewer',
  templateUrl: './employee-viewer.component.html',
  styleUrls: ['./employee-viewer.component.scss']
})
export class EmployeeViewerComponent implements OnInit {

  selected_employee: Employee;
  employee_list: Employee[];
  display_edition: Boolean = false;


  private _success = new Subject<string>();
  errorMessage: string;


  constructor(private employeeService: EmployeeService) { }

  /**
   * Ng On Init call after construction
   */
  ngOnInit(): void {
    this.fill_employee_list();

    this._success.subscribe((message) => this.errorMessage = message);
    debounceTime.call(this._success, 5000).subscribe(() => { this.errorMessage = null; });
  }

  /**
   * Change error message
   */
  private changeErrorMessage(updatedEmployee: Employee): void {
    console.log('EmployeeViewerComponent:changeErrorMessage');
    this._success.next('Unable to udpate employee, connection error....' + JSON.stringify(updatedEmployee));
  }

  /**
   * Fill employee list
   */
  private fill_employee_list(): void {
    this.employeeService.getEmployees().subscribe(
      result => this.employee_list = result
    );
  }

  /**
   * Selector of employee
   * @param employee selected employee
   */
  public onSelect(employee: Employee): void {
    // On copie l'object pour ne pas modifier la liste
    this.selected_employee = Object.assign({}, employee);
    this.display_edition = true;
  }

  /**
   * Update employee on GUI
   * @param updatedEmployee Updated employee
   */
  private updateItem(updatedEmployee: Employee): void {
    if (updatedEmployee) { // si non undefined, undefined == erreur http
      const foundIndex = this.employee_list.findIndex(x => x.id === updatedEmployee.id);
      this.employee_list[foundIndex] = updatedEmployee;
    } else {
      this.changeErrorMessage(this.selected_employee);
    }
  }

  /**
   * Edit employee
   */
  public edit(): void {
    if (this.selected_employee) {
      // Update
      this.display_edition = false;
      this.employeeService.updateEmployees(this.selected_employee).subscribe(
        result => this.updateItem(result)
      );
    }
  }
}
