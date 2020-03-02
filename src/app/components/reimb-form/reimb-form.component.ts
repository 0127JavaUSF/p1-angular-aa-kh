import { Component } from '@angular/core';
import { NewReimb } from '../../classes/new-reimb';
import { CreateService } from '../../services/create/create.service';
import { SessionService } from '../../services/session/session.service';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-reimb-form',
  templateUrl: './reimb-form.component.html',
  styleUrls: ['./reimb-form.component.css']
})

export class ReimbFormComponent{
  
  constructor(private tabComp: TableComponent, private _createService: CreateService, private sessionService: SessionService){}
  ngOnInit(): void {
    this.sessionService.fetchCurrentUser();
  }

  newReimbModel = new NewReimb(this.sessionService.getCurrentUser().userId, 0, 0, "", "")

  onSubmit(){
    this._createService.create(this.newReimbModel)
      .subscribe(
        data => console.log('Success!', data),
        error => console.error('Error!', error)
      )
    this.tabComp.ngOnInit();
  }
}
