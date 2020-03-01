import { Component } from '@angular/core';
import { Update } from 'src/app/classes/reimb-update';
import { UpdateService } from 'src/app/services/update/update.service';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})

export class AdminFormComponent {

  constructor(private employeeService: EmployeeService, private updateService: UpdateService){}

  updateModel = new Update(0, this.employeeService.getCurrentUser().userId, 1);

  onSubmit(){
    this.updateService.update(this.updateModel)
      .subscribe(
        data => console.log('Success!', data),
        error => console.log('Error!', error)
      )
  }
}
