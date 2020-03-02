import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _sessionService: SessionService, private router: Router) { }

  ngOnInit(): void {
    this._sessionService.fetchCurrentUser();
  }

  onLogout() {

    if (this._sessionService.isLoggedIn()) {
      this._sessionService.logout()
        .subscribe(
          () => {
            console.log("Logging out " + this._sessionService.getCurrentUser().username);
            console.log("Removed token: " + this._sessionService.getCurrentUser().sessionToken);
            this._sessionService.setCurrentUser(false);
            this.router.navigateByUrl('');
          },
          error => console.log('******Error!', error)
        )
    } else {
      console.log("No one has logged in.");
    }
  }

}
