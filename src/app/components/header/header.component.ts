import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee/employee.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _employeeService: EmployeeService,) { }

  ngOnInit(): void {
  }

  onLogout() {
    if (this._employeeService.isLoggedIn()) {
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
