import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/classes/employee/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _employeeService: EmployeeService) {}

  employee = new Employee("", "");

  ngOnInit(): void {
  }

  onLogin() {

    console.log(this.employee);

    this._employeeService.create(this.employee)
      .subscribe(
        data => this._employeeService.setCurrentUser(data),
        error => console.error('Error!', error)
      )
    
    console.log(this._employeeService.getCurrentUser);

  }

}
