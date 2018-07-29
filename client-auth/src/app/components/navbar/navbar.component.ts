import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthService) {
    auth.handleAuthentication();

  }

  ngOnInit() {
  }

  public login() {
    this.auth.login();

  }

  public logout() {
    this.auth.logout();

  }

}
