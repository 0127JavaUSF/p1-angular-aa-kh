import { Component, OnInit } from '@angular/core';
import { Employee } from '../../classes/employee/employee';
import { EmployeeService } from '../../services/employee/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _employeeService: EmployeeService) { }

  employee = new Employee("", "");

  ngOnInit(): void {}

  onLogin() {
    if(!this._employeeService.isLoggedIn()) {
      if(this.employee.password && this.employee.username){
        this._employeeService.create(this.employee)
          .subscribe(
            data => {
              this._employeeService.setCurrentUser(data);
              if (this._employeeService.getCurrentUser()) {
                console.log(this._employeeService.getCurrentUser().username + " has logged in.");
                console.log("Token assigned: " + this._employeeService.getCurrentUser().sessionToken);
              }
            },
            error => console.error('Error!', error)
          )
      } else {
        console.log("Fill out both fields");
      }
    } else {
      console.log(this._employeeService.getCurrentUser().username + " has logged in. Logout first!");
    }
  }

  onLogout() {
    if(this._employeeService.isLoggedIn()) {
      this._employeeService.logout()
        .subscribe(
          () => {
            console.log("Logging out " + this._employeeService.getCurrentUser().username);
            console.log("Removed token: " + this._employeeService.getCurrentUser().sessionToken);
            this._employeeService.setCurrentUser(false);
          },
          error => console.log('******Error!', error)
        )
    } else {
      console.log("No one has logged in.");
    }
  }
}