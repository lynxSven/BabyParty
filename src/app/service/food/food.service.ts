import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, retry, throwError } from 'rxjs';
import { AuthService } from 'src/app/login/auth/auth.service';
import { CreateFoodDto } from './createFoodDto';
import { FoodItems } from './foodItems';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  items: FoodItems[] = [];
  constructor(private http: HttpClient, public authService: AuthService) { }

  loadAllData(): void {


    this.http.get<any>("https://babypartybackend.adaptable.app/food").pipe(retry(1), catchError(this.handleError)).subscribe(
      (data: FoodItems[]) => {
        console.log("got my data ", data);
        this.items = data;
      }
    );
  }


  createFood(headline: string | null, text: string | null): void {

    if (!headline) {
      throw new Error("Headline ist leer");
    }

    if(!text){
      text =  "";
    }
    let createFoodDto: CreateFoodDto = {
      headline: headline,
      text: text,
      user: this.authService.getCurrentUser()
    };
    this.http.post<any>("https://babypartybackend.adaptable.app/food/", createFoodDto).pipe(retry(1), catchError(this.handleError)).subscribe(
      (data: FoodItems[]) => {
        console.log("got my data ", data);
        this.loadAllData();
      }
    );
  }

  deleteFood(id:string): void {

    this.http.delete<any>("https://babypartybackend.adaptable.app/food/" + id).pipe(retry(1), catchError(this.handleError)).subscribe(
      (data: FoodItems[]) => {
        console.log("got my data ", data);
        this.loadAllData();
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
