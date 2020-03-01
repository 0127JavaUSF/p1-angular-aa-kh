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

  constructor( private httpService: HttpClient,private _employeeService: EmployeeService) { }
  
  userReimbs: string [];
  
  _url = 'http://localhost:8080/EmplReimb/admin';
  
  ngOnInit(): void {
    this.httpService.get(this._url).subscribe(
      data => {
        this.userReimbs = data as string [];
      }
    );
  }

}
