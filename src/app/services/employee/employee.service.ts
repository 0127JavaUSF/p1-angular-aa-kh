import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from "../../classes/employee/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public currentUser = {
    username: "",
    password: "",
    sessionToken: "",
  }
  
  _url = 'http://localhost:8080/EmplReimb/SessionServlet';
  constructor(private _http: HttpClient) { }

  getCurrentUser(): any {
    return this.currentUser;
  }

  setCurrentUser(user: any) {
    if(user === false) {
      this.currentUser.username = "";
      this.currentUser.password = "";
      this.currentUser.sessionToken = "";
    } else {
      this.currentUser.username = user.username;
      this.currentUser.password = user.password;
      this.currentUser.sessionToken = user.sessionToken;
    }
  }

  isLoggedIn(): boolean {
    if (this.getCurrentUser().username.length > 0) {
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

  logout(): any {
    if (this.getCurrentUser) {
      console.log("Logging out the current user...");
      return this._http.delete<any>(this._url, {});
    }
  }

}