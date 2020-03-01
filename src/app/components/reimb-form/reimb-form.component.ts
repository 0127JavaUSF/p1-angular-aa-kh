import { Component } from '@angular/core';
import { NewReimb } from '../../classes/new-reimb';
import { CreateService } from '../../services/create/create.service';
import { EmployeeService } from '../../services/employee/employee.service';

@Component({
  selector: 'app-reimb-form',
  templateUrl: './reimb-form.component.html',
  styleUrls: ['./reimb-form.component.css']
})

export class ReimbFormComponent{
  
  constructor(private _createService: CreateService, private employeeService: EmployeeService){}

  newReimbModel = new NewReimb(this.employeeService.getCurrentUser().userId, 0, 0, "", "")

  onSubmit(){
    this._createService.create(this.newReimbModel)
      .subscribe(
        data => console.log('Success!', data),
        error => console.error('Error!', error)
      )
  }
}
