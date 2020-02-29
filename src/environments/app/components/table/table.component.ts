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
  _url = 'http://localhost:8080/EmplReimb/admin-display';
 
  ngOnInit(): void {
    this.httpService.get(this._url).subscribe(
      data => {
        this.userReimbs = data as string [];
        
        //showing the appropriate value for the statusID and typeID
        for(let i = 0; i < this.userReimbs.length; i++ ){
          let status = data[i].statusID;
          let type = data[i].typeID;

          switch(status){
            case 1: status = "Pending"; break;
            case 2: status = "Approved"; break;
            case 3: status = "Denied"; break;
          }
          data[i].statusID = status;

          switch(type){
            case 1: type = "Lodging"; break;
            case 2: type = "Travel"; break;
            case 3: type = "Food"; break;
            case 4: type = "Other"; break;
          }
          data[i].typeID = type;
        }
      }
    );

    

  }

}
