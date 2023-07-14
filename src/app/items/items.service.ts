import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { AuthService } from '../login/auth/auth.service';
import { Items } from './items';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  itemsCurrentUser: Items[] = [];
  items: Items[] = [];
  itemTest: any = null;
  constructor(private http: HttpClient,public authService: AuthService,) { }



  loadDataReservedByCurrentUser(): void {

    this.http.get<any>("https://babypartybackend.adaptable.app/shopping-list/currentUser/"+ this.authService.getCurrentUser()).pipe(retry(1), catchError(this.handleError)).subscribe(
      (data: Items[]) => {
        console.log("got my data ", data);
        this.itemsCurrentUser = data;
      }
    );
  }

  loadAllData(): void {

    this.http.get<any>("https://babypartybackend.adaptable.app/shopping-list").pipe(retry(1), catchError(this.handleError)).subscribe(
      (data: Items[]) => {
        console.log("got my data ", data);
        this.items = data;
      }
    );
  }
  // Error handling
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
  }
}
