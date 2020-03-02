import { Component } from '@angular/core';
import { Update } from 'src/app/classes/reimb-update';
import { UpdateService } from 'src/app/services/update/update.service';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})

export class AdminFormComponent {

  constructor(private sessionService: SessionService, private updateService: UpdateService){}
 
  ngOnInit(): void {
    this.sessionService.fetchCurrentUser();
  }

  updateModel = new Update(0, this.sessionService.getCurrentUser().userId, 1);

  onSubmit(){
    this.updateService.update(this.updateModel)
      .subscribe(
        data => console.log('Success!', data),
        error => console.log('Error!', error)
      )
  }
}
