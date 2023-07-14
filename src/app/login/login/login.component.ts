import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) {

  }
  ngOnInit() {
    this.authService.loadAllData();
  }

  public login(loginname: string) {
    this.authService.setCurrentUser(loginname)
    this.router.navigate([""]);
  }


}
