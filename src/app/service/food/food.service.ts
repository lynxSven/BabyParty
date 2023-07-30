import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { FoodItems } from './foodItems';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  items: FoodItems[] = [];
  constructor(private http: HttpClient) { }

  loadAllData(): void {

    this.http.get<any>("https://babypartybackend.adaptable.app/food").pipe(retry(1), catchError(this.handleError)).subscribe(
      (data: FoodItems[]) => {
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
