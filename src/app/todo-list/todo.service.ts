import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Task } from './Task';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  url = 'http://localhost:3000/tasks/';

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }

  list() {
    return this.http
      .get<Task[]>(this.url)
      .pipe(retry(3), catchError(this.handleError));
  }

  create(task: Task) {
    return this.http
      .post<Task>(this.url, task)
      .pipe(retry(3), catchError(this.handleError));
  }

  delete(id: number) {
    return this.http
      .delete<Task>(this.url + id)
      .pipe(retry(3), catchError(this.handleError));
  }

  update(task: Task) {
    return this.http
      .put(this.url + task.id, task)
      .pipe(retry(3), catchError(this.handleError));
  }
}
