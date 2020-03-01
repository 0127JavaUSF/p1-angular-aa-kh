import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../../services/employee/employee.service'
import { ReimbFormComponent } from '../reimb-form/reimb-form.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor( private httpService: HttpClient,private employeeService: EmployeeService) { }
  
  userId: number;
  roleId: number;

  userReimbs: string [];
  
  _url;
  
  ngOnInit(): void {
    // when refresh, you lose currentUser because it's a new instance of service class.
    // Solution: Use cookies that will store userId
    this.userId = this.employeeService.getCurrentUser().userId;
    this.roleId = this.employeeService.getCurrentUser().roleId;
    console.log(this.userId);
    console.log(this.roleId);

    if(this.roleId == 1){
      this._url = "http://localhost:8080/EmplReimb/admin";
    }

    if(this.roleId == 2){
      this._url = "http://localhost:8080/EmplReimb/display/" + this.userId;
    }
    
    this.httpService.get(this._url).subscribe(
      data => {
        this.userReimbs = data as string [];
      }
    );

    

  }

}
