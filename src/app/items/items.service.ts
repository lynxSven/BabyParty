import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { Items } from './items';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  itemsCurrentUser: Items[] = [];
  items: Items[] = [];
  itemTest: any = null;
  constructor(private http: HttpClient) { }



  loadDataReservedByCurrentUser(): void {
    this.itemsCurrentUser = [
      {
        headline: "headline",
        href: "https://babypartybackend.adaptable.app/todos",
        hrefImg: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, cumque ut deserunt aspernatur libero quibusdam earum sequi accusamus impedit vel obcaecati suscipit quae, exercitationem, eaque quas. Debitis accusantium in nostrum sapiente est velit dolor eius ipsam amet et? Rem natus error dicta mollitia doloribus. Voluptas blanditiis sequi minima aliquam cumque?"
      }]
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
