import { Injectable } from '@angular/core'
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { User } from "app/shared/models/user";


@Injectable() 
  export class UserService {
    private usersUrl: string = 'https://reqres.in/api/users';

    constructor(private http: Http) { }


    // get all Users
      getUsers(): Observable<User[]> {
        return this.http.get(this.usersUrl) 
          .map(response => response.json().data)
            .catch(this.handleError); 
    }
    // get single User

    getUser(id: number): Observable<User> {
      return this.http.get(`${this.usersUrl}/${id}`)
        .map(res => res.json().data)
          .catch(this.handleError);
    }

    // create user

    // update user

    // delete user

    // Handle API Errors

    private handleError(err) {
    let errMessage: string;

    if (err instanceof Response) {
      let body = err.json() || '';
      let error = body.error || JSON.stringify(body);
      errMessage = `${err.status} - ${err.statusText} || ''} ${error}`;
    } else {
      errMessage = err.message ? err.message : err.toString();
    }

    return Observable.throw(errMessage);
    }
}