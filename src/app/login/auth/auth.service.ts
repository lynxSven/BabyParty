import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser = 'someone';

  constructor() { }

  isAuthenticated(): boolean {
    if(this.currentUser !== undefined && this.currentUser !== null){
      return false;
    }
    return false;
  }
}
