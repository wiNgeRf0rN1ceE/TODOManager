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
    return this.http.get(this.apiUrl + 'todos')
      .map( (res: Response) => res.json() )
      .catch(err => this.handleError(err))
  }

  public editTodo(id: String, title: String) {
    const data = { "title": title }
    return this.http.put(this.apiUrl + 'todos/' + id, data)
  }

  public createTodo(title: String, priority: String) {
    const data = { "title": title, "priority": priority }
    return this.http.post(this.apiUrl + 'todos', data)
  }

  public removeTodo(id: String) {
    return this.http.delete(this.apiUrl + 'todos/' + id);
  }



  public getGroups() {
    return this.http.get(this.apiUrl + 'groups')
      .map( (res: Response) => res.json() )
      .catch(err => this.handleError(err))
  }

  public editGroup(id: String, title: String) {
    return this.http.put(this.apiUrl + 'groups/' + id, { "title" : title })
  }

  public createGroup(title: String) {
    return this.http.post(this.apiUrl + 'groups', { "title": title })
  }

  public removeGroup(id: String) {
    return this.http.delete(this.apiUrl + 'groups/' + id)
  }

  private handleError(err) {
    return Observable.throw(err)
  }

}
