import { Component, OnInit } from '@angular/core';
import { Employee } from '../../classes/employee/employee';
import { SessionService } from '../../services/session/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _sessionService: SessionService, private router: Router) { }

  employee = new Employee("", "");

  ngOnInit(): void {
  }

  onLogin() {
    if(!this._sessionService.isLoggedIn()) {
      if(this.employee.password && this.employee.username){
        this._sessionService.create(this.employee)
          .subscribe(
            data => {
              this._sessionService.setCurrentUser(data);
              if (this._sessionService.getCurrentUser()) {
                console.log("ID: " + this._sessionService.getCurrentUser().userId);
                console.log(this._sessionService.getCurrentUser().username + " has logged in.");
                console.log("Token assigned: " + this._sessionService.getCurrentUser().sessionToken);
                console.log("Email: " + this._sessionService.getCurrentUser().email);
                console.log("Username: " + this._sessionService.getCurrentUser().username);
                console.log("FirstName: " + this._sessionService.getCurrentUser().firstName);

              }
              // this.location.replaceState('/home');
              this.router.navigateByUrl('/home' );
            },
            error => console.error('Error!', error)
          )
      } else {
        console.log("Fill out both fields");
      }
    } else {
      console.log(this._sessionService.getCurrentUser().username + " has logged in. Logout first!");
    }
  }

  onLogout() {
    if(this._sessionService.isLoggedIn()) {
      this._sessionService.logout()
        .subscribe(
          () => {
            console.log("Logging out " + this._sessionService.getCurrentUser().username);
            console.log("Removed token: " + this._sessionService.getCurrentUser().sessionToken);
            this._sessionService.setCurrentUser(false);
          },
          error => console.log('******Error!', error)
        )
    } else {
      console.log("No one has logged in.");
    }
  }
}