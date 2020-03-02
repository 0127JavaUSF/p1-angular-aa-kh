import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from "../../classes/employee/employee";

@Injectable({
  providedIn: 'root'
})

export class SessionService {

  url = 'http://localhost:8080/EmplReimb/SessionServlet';

  public currentUser = {
    userId: 0,
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    roleId: 0,
    sessionToken: "",
  }
  
  constructor(private http: HttpClient) { }

  getCurrentUser(): any {
    return this.currentUser;
  }

  setCurrentUser(user: any) {
    if(user === false) {
      this.resetCurrentUserFields();
    } else {
      this.currentUser.userId = user.userId;
      this.currentUser.username = user.username;
      this.currentUser.firstName = user.firstName;
      this.currentUser.lastName = user.lastName;
      this.currentUser.email = user.email;
      this.currentUser.roleId = user.roleId;
      this.currentUser.sessionToken = user.sessionToken;
    }
  }

  resetCurrentUserFields() {
    this.currentUser.userId = 0;
    this.currentUser.username = "";
    this.currentUser.firstName = "";
    this.currentUser.lastName = "";
    this.currentUser.email = "";
    this.currentUser.roleId = 0;
    this.currentUser.sessionToken = "";
  }

  isLoggedIn(): boolean {
    if (this.getCurrentUser().username.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  // create session
  create(employee: Employee) {
    // this Employee = LoginDetails
    return this.http.post<any>(this.url, {
      username: employee.username,
      password: employee.password
    },
    {withCredentials: true},
    );
  }

  // destroy session
  logout(): any {
    if (this.getCurrentUser) {
      console.log("Logging out the current user...");
      return this.http.delete<any>(this.url, {});
    }
  }

  fetchCurrentUser(): any {
    this.http.get<any>(this.url).subscribe(
      data => this.setCurrentUser(data),
      error => console.log("Can not fetch current user.")
    )
  }

}