import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../models/User';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  

  constructor(private httpClient: HttpClient) { }

  public getUsers(): Observable<User[]>{
    let url: string = 'https://jsonplaceholder.typicode.com/users';
    //invalid url - 'https://jsonplaceholder.typicode.com/users'
    return this.httpClient.get<User[]>(url).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `an error occurred ${error.error}`;
      //console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      errorMessage = `backend returned code ${error.status}, body was: ${error.error}`
      //console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    errorMessage += `\nSomething bad happened; please try again later.`;
    // Return an observable with a user-facing error message.
    return throwError(() => errorMessage);
  }

}
