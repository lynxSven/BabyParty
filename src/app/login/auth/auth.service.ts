import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { catchError, retry, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

const USER_COOKIE_NAME = "currentUser";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  allUsers: User[] = []


  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  isAuthenticated(): boolean {
    console.log(this.cookieService.get(USER_COOKIE_NAME));
    console.log("checking ",this.cookieService.get(USER_COOKIE_NAME) !== null && this.cookieService.get(USER_COOKIE_NAME) !== undefined && this.cookieService.get(USER_COOKIE_NAME).length !== 0)
    return this.cookieService.get(USER_COOKIE_NAME) !== null && this.cookieService.get(USER_COOKIE_NAME) !== undefined && this.cookieService.get(USER_COOKIE_NAME).length !== 0;
  }

  getCurrentUser(): string {
    return this.cookieService.get(USER_COOKIE_NAME);
  }

  setCurrentUser(loginName: string) {
    this.cookieService.set(USER_COOKIE_NAME, loginName);
    this.cookieService.get(USER_COOKIE_NAME);
  }

  emptyCurrentUser(){
    this.cookieService.delete(USER_COOKIE_NAME);
  }

  loadAllData(): void {

    this.http.get<any>("https://babypartybackend.adaptable.app/user").pipe(retry(1), catchError(this.handleError)).subscribe(
      (data: User[]) => {
        console.log("got my data ", data);
        this.allUsers = data;
      }
    );
  }

  // loadAllData(): void {

  //   this.http.get<any>("https://babypartybackend.adaptable.app/shopping-list").pipe(retry(1), catchError(this.handleError)).subscribe(
  //     (data: Items[]) => {
  //       console.log("got my data ", data);
  //       this.allUsers = data;
  //     }
  //   );
  // }
  // // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // window.alert(errorMessage);
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
    // }
  }
}
