import { Injectable } from '@angular/core'
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { User } from "app/shared/models/user";


@Injectable() 
  export class UserService {
    private usersUrl: string = 'https://reqres.in/api/users';


/**
 * observable source  -- hold the data
 */

 private userCreatedSource = new Subject<User>();
 private userDeletedSource = new Subject();

/**
 * observable stream -- what we subscribe to
 */

 userCreated$ = this.userCreatedSource.asObservable();
 userDeleted$ = this.userDeletedSource.asObservable();

constructor(private http: Http) { }


/**
 * Get all the users
 */
      getUsers(): Observable<User[]> {
        return this.http.get(this.usersUrl) 
          .map(response => response.json().data)
          .map(users => users.map(this.toUser))
            .catch(this.handleError); 
    }
/**
 * get single User--------------------------------------------------------------------
 */
 

  getUser(id: number): Observable<User> {
    return this.http.get(`${this.usersUrl}/${id}`)
      .map(res => res.json().data)
      .map(this.toUser)
      .catch(this.handleError);
  }

/**
 * END get single User--------------------------------------------------------------------
 */

/**
 *  create user
 * -------------------------------------------------------------------------------------
 */


  /**
   * Create the user
   */
  createUser(user: User): Observable<User> {
    return this.http.post(this.usersUrl, user)
      .map(res => res.json())
      .do(user => this.userCreated(user))
      .catch(this.handleError);
  }
/**
 * update user
 */
  updateUser(user: User): Observable<User> {
    return this.http.put(`${this.usersUrl}/${user.id}`, user) 
    // return this.http.get(`${this.usersUrl}/23`) //test error from reqres.in
    .map(res => res.json())
    .catch(this.handleError);
  }
  

/**
 * delete user
 */

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.usersUrl}/${id}`)
    .do(resp => this.userDeleted())
    .catch(this.handleError);
  }

/** 
 * convert user info from api to our standards
*/
  private toUser(user): User {
    return {
      id: user.id,
      name: `${user.first_name} ${user.last_name}`,
      username: user.first_name,
      avatar: user.avatar
    };
  }


/**
 * info for userCreated stream
 */
  userCreated(user: User) {
    this.userCreatedSource.next(user); //passing in the info 'next'
  }


/**
 * user deleted add info to the stream
 */
  userDeleted() {
    this.userDeletedSource.next();
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