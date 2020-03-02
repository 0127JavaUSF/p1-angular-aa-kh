import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Update } from 'src/app/classes/reimb-update';
import { UpdateService } from 'src/app/services/update/update.service';
import { SessionService } from '../../services/employee/session.service'
import { ReimbFormComponent } from '../reimb-form/reimb-form.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor( private httpService: HttpClient,private sessionService: SessionService, private updateService: UpdateService) { }
  
  userId: number;
  roleId: number;

  userReimbs: string [];
  updateModel = new Update(0, this.sessionService.getCurrentUser().userId, 1);
  _url;
  
  ngOnInit(): void {
    // when refresh, you lose currentUser because it's a new instance of service class.
    // Solution: Use cookies that will store userId
    this.userId = this.sessionService.getCurrentUser().userId;
    this.roleId = this.sessionService.getCurrentUser().roleId;
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

  onSubmit(){
    this.updateService.update(this.updateModel)
      .subscribe(
        data => console.log('Success!', data),
        error => console.log('Error!', error)
      )
  }

}
