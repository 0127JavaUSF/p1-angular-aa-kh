import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor( private httpService: HttpClient) { }
  userReimbs: string [];
  _url = 'http://localhost:8080/EmplReimb/display/3';
 
  ngOnInit(): void {
    this.httpService.get(this._url).subscribe(
      data => {
        this.userReimbs = data as string [];
        console.log(this.userReimbs[1]);
      }
    );
  }

}
