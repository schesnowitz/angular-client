import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { User } from './shared/models/user';
import { UserService } from './shared/services/user.service';
import { AuthService } from './shared/services/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: User[];
  constructor(    private userService: UserService, 
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
   }
  /**
   * Is the user logged in?
   */
  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }


  /**
   * Log the user out
   */
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
