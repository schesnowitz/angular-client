import { Injectable } from '@angular/core'
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";


@Injectable()
export class AuthService {
  private authUrl: string = 'https://reqres.in/api'
  private loggedIn: boolean = false;


  constructor(private http: Http) {
/**
 * look at the local storage to see if user is logged in
 */
    this.loggedIn = !!localStorage.getItem('auth_token') // !! casts to boolean not string
  }


/**
 * check if user is logged in
 */

  isLoggedIn() {
    return this.loggedIn;
  }

  /**
   * log user in
   */
  login(username: string = '', password: string = ''): Observable<string> {
    return this.http.post(`${this.authUrl}/login`, { username, password })
    .map(res => res.json())
    .do(res => {
      if (res.token) { 
        localStorage.setItem('auth_token', res.token);
        this.loggedIn = true;
        }
    })
    .catch(this.handleError);
  }

/**
 * Log the user Out
 */
 logout() {
  localStorage.removeItem('auth_token');
  this.loggedIn = false;
 }
 

/**
 * API error handeling
 */
    private handleError(err) {
    let errMessage: string;

    if (err instanceof Response) {
      let body = err.json() || '';
      let error = body.error || JSON.stringify(body);
      errMessage = `${err.status} - ${err.statusText || ''} ${error}`;
    } else {
      errMessage = err.message ? err.message : err.toString();
    }

    return Observable.throw(errMessage);
    }
}