import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationUser } from '../../model/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor( private http: HttpClient) { }

  ngOnInit() {
  }
  public save() {
    console.log('Executing save method');
    const user: ApplicationUser = new ApplicationUser();
    user.name = 'Breymer Robles';
    user.identification = '101010101';
    user.email = 'byrobles2009@gmail.com';
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
