import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from "../../classes/employee/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public currentUser: any;

  _url = 'http://localhost:8080/EmplReimb/SessionServlet';
  constructor(private _http: HttpClient) { }
  
  getCurrentUser(): any { 
    return this.currentUser;
  }

  setCurrentUser(user: any) {
    this.currentUser = user;
    console.log(this.currentUser.username);
  }

  isLoggedIn(): boolean {
    if(this.getCurrentUser()) {
      return true;
    } else {
      return false;
    }
  }

  create(employee: Employee) {
    console.log("I am service: " + employee.password);
    return this._http.post<any>(this._url, {
      username: employee.username,
      password: employee.password
    });
  }

  destroy(): any {
    if(this.getCurrentUser) {
      console.log("Logging out the current user...");
      return this._http.delete<any>(this._url);
    }
  }

}