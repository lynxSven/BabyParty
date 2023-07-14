import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { catchError, retry, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser = 'someone';
  allUsers: User[] = []

  constructor(private http: HttpClient) { }

  isAuthenticated(): boolean {
    if (this.currentUser !== undefined && this.currentUser !== null) {
      return false;
    }
    return false;
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
