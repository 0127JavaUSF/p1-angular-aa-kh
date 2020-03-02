import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Update } from 'src/app/classes/reimb-update';
import { UpdateService } from 'src/app/services/update/update.service';
import { SessionService } from '../../services/session/session.service'
import { ReimbFormComponent } from '../reimb-form/reimb-form.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor( private hostElement: ElementRef, private httpService: HttpClient,private sessionService: SessionService, private updateService: UpdateService) { }
  
  userId: number;
  roleId: number;

  userReimbs;
  //: string [];
  updateModel = new Update(0, 0, 1);
  _url;

  ngOnInit(): void {

    this.sessionService.fetchCurrentUser();
  
    setTimeout(() => {   
      // when refresh, you lose currentUser because it's a new instance of service class.
      // Solution: Use cookies that will store userId
      this.userId = this.sessionService.getCurrentUser().userId;
      this.roleId = this.sessionService.getCurrentUser().roleId;
      // console.log(this.userId);
      // console.log(this.roleId);

      if(this.roleId == 1){
        this._url = "http://localhost:8080/EmplReimb/admin";
      }

      if(this.roleId == 2){
        this._url = "http://localhost:8080/EmplReimb/display/" + this.userId;
      }
    
      this.httpService.get(this._url).subscribe(
        data => {
          console.log(data);
          this.userReimbs = data; 
          //as string [];
        }
      );
    }, 1500);
  }

  onSubmit(){
    this.updateModel.reimbID = this.userReimbs[0].reimbID;
    this.updateModel.resolver = this.sessionService.getCurrentUser().userId
    this.updateService.update(this.updateModel)
      .subscribe(
        data => console.log('Success!', data),
        error => console.error('Error!', error)
      )
    // console.log(this.userReimbs[0].reimbID);
  }
}
