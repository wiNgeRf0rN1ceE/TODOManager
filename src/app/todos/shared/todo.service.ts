import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {Observable, Observer} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TodoService {

  private apiUrl: String = 'http://localhost:3000/';

  constructor(
    private http: Http
  ) { }

  static createHeaders(headers: Headers) {
    headers.append('Content-Type', 'application/json');
  }

  public getTodos() {
    let headers = new Headers();
    TodoService.createHeaders(headers);
    return this.http.get(this.apiUrl + 'todos')
      .map( (res: Response) => res.json() )
      .catch(err => this.handleError(err))
  }

  private handleError(err) {
    return Observable.throw(err)
  }

}
