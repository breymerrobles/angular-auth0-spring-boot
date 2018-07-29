import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApplicationUser } from '../../model/user.model';
import {
  HttpClient
} from '@angular/common/http';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {
  profile: any;
  showActivity = false;
  constructor(private auth: AuthService, private http: HttpClient) { }

  ngOnInit() {
    this.showActivity = false;
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
      console.log(this.profile);
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        console.log(this.profile);
      });
    }
  }
  public profileAction() {
    this.showActivity = !this.showActivity;
    this.save();
  }

  public save() {
    console.log('Executing save method');
    const user: ApplicationUser = new ApplicationUser();
    user.name = this.profile.name;
    user.identification = '101010101';
    user.email = this.profile.email;
    user.profesion = 'Médico';
    user.especiality = 'Pediatría';
    user.role = 'PROFESIONAL';

    user.contact = '30178999';

    this.http.post('http://localhost:9191/users/sign-up', user).subscribe(data => {
      console.log(data);

    });


    console.log('End Executing save method');
  }
}
