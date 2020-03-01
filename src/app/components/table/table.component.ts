import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/app/classes/employee/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor( private httpService: HttpClient, private employeeService: EmployeeService) { }
  
  userId: number;

  userReimbs: string [];
  _url = 'http://localhost:8080/EmplReimb/admin-display';
  
  ngOnInit(): void {
    this.httpService.get(this._url).subscribe(
      data => {
        this.userReimbs = data as string [];
      }
    );

    // when refresh, you lose currentUser because it's a new instance of service class.
    // Solution: Use cookies that will store userId
    this.userId = this.employeeService.getCurrentUser().userId;
    console.log(this.userId);

  }

}
