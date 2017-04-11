import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = { username: '', password: '' };
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit() {}  

  /**
   * Login a user
   */
  login() {
    this.errorMessage = '';

    this.service.login(this.credentials.username, this.credentials.password)
      .subscribe(
        data => {
          this.router.navigate(['']);
          console.log(data); 
        },
        err => {
          this.errorMessage = err;
          console.error(err);
        }
      );
  }

}

