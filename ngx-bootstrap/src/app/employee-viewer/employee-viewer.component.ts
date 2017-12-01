import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from './employee.service'

@Component({
  selector: 'app-employee-viewer',
  templateUrl: './employee-viewer.component.html',
  styleUrls: ['./employee-viewer.component.scss']
})
export class EmployeeViewerComponent implements OnInit {

  selected_employee: Employee;
  employee_list: Employee[];
  display_edition: Boolean = false;
  constructor(private employeeService: EmployeeService) { }

  /**
   * Ng On Init call after construction
   */
  ngOnInit() {
    this.fill_employee_list();
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
    //this.selected_employee = employee;
    this.selected_employee = Object.assign({}, employee);
    this.display_edition = true;
  }

  /**
   * Update employee on GUI
   * @param updatedEmployee Updated employee
   */
  private updateItem(updatedEmployee: Employee): void {
    var foundIndex = this.employee_list.findIndex(x => x.id == updatedEmployee.id);
    this.employee_list[foundIndex] = updatedEmployee;
  }

  /**
   * Edit employee 
   */
  public edit(): void {
    if (this.selected_employee) {
      // Update
      console.log("New Name " + this.selected_employee.first_name);
      this.display_edition = false;
      this.employeeService.updateEmployees(this.selected_employee).subscribe(
        _ => this.updateItem(this.selected_employee)
      )
    }
  }
}
