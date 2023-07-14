import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth/auth.service';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss']
})
export class HeadlineComponent {
  constructor(public authService: AuthService, private router: Router) {


  }
  public logout() {
    this.authService.emptyCurrentUser()
    console.log("before navigate");
    this.router.navigate(["login"]);
}
}
