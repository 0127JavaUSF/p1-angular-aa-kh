import { Component } from '@angular/core';
import { NewReimb } from '../../classes/new-reimb';
import { CreateService } from '../../services/create/create.service';


@Component({
  selector: 'app-reimb-form',
  templateUrl: './reimb-form.component.html',
  styleUrls: ['./reimb-form.component.css']
})

export class ReimbFormComponent{

  newReimbModel = new NewReimb(0, 0, "", "")
  constructor(private _ceateService: CreateService){}


  onSubmit(){
    this._ceateService.create(this.newReimbModel)
      .subscribe(
        data => console.log('Success!', data),
        error => console.error('Error!', error)
      )
  }
}
