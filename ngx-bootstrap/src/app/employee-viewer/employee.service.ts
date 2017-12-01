import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';
import { Logger } from '../core/logger.service';

export interface Employee {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

const log = new Logger('EmployeeService');
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class EmployeeService {

  /**
   * Class constructor
   * @param httpClient - objet to interact with http
   */
  constructor(private httpClient: HttpClient) { }

  /**
   * Get Employee observable
   */
  public getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>('http://127.0.0.1:3000/employees')
      .pipe(catchError(this.handleError('getHeroes', [])));
  }

  /**
   * update the hero on the server
   */
  public updateEmployees(employee: Employee): Observable<any> {
    const url: string = 'http://127.0.0.1:3000/employees/' + employee.id;
    log.debug('EmployeeService::updateEmployees url: ' + url);
    return this.httpClient.put(url, employee, httpOptions).pipe(
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation: string = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // Send the error to remote logging infrastructure
      log.error(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
