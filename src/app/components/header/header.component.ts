import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _sessionService: SessionService,) { }

  ngOnInit(): void {
  }

  onLogout() {
    if (this._sessionService.isLoggedIn()) {
      this._sessionService.logout()
        .subscribe(
          () => {
            console.log("Logging out " + this._sessionService.getCurrentUser().username);
            console.log("Removed token: " + this._sessionService.getCurrentUser().sessionToken);
            this._sessionService.setCurrentUser(false);
          },
          error => console.log('******Error!', error)
        )
    } else {
      console.log("No one has logged in.");
    }
  }

}
