import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Item } from './todo-item/todo-item.component';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  baseUrl = 'http://localhost:3000/items/';

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }

  getAllItem() {
    return this.http
      .get<Item[]>(this.baseUrl)
      .pipe(retry(3), catchError(this.handleError));
  }

  addItem(item: Item) {
    return this.http
      .post<Item>(this.baseUrl, item)
      .pipe(retry(3), catchError(this.handleError));
  }

  deletItem(id: number) {
    return this.http
      .delete<Item>(this.baseUrl + id)
      .pipe(retry(3), catchError(this.handleError));
  }

  updateItem(item: Item) {
    return this.http
      .put(this.baseUrl + item.id, item)
      .pipe(retry(3), catchError(this.handleError));
  }
}
