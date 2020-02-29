import { Component, OnInit } from '@angular/core';
import { Employee } from '../../classes/employee/employee';
import { EmployeeService } from '../../services/employee/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  flag: boolean;

  constructor(private _employeeService: EmployeeService) { }

  employee = new Employee("", "");

  ngOnInit(): void {
  }

  onLogin() {

    console.log(this.employee);

    this._employeeService.create(this.employee)
      .subscribe(
        data => {
          this._employeeService.setCurrentUser(data);
          if (this._employeeService.getCurrentUser()) {
            this.flag = true;
          }
        },
        error => console.error('Error!', error)
      )

    console.log(this._employeeService.getCurrentUser);

  }

  onLogout() {
    this._employeeService.destroy()
      .subscribe(
        () => console.log("Logged out."),
        error => console.log('Error!', error)
      )
  }

}