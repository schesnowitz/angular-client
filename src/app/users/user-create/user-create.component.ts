import { Component, OnInit } from '@angular/core';
import { User } from "app/shared/models/user";
import { UserService } from "app/shared/services/user.service";
import { Router } from "@angular/router";


@Component({
    moduleId: module.id,
    selector: 'user-create',
    templateUrl: 'user-create.component.html',
    styleUrls: ['user-create.component.css']
})
export class UserCreateComponent implements OnInit {
    user: User = {name: '', username: '', avatar: ''};
    successMessage: string = '';
    errorMessage: string = '';
    constructor(private service: UserService, private router: Router) {}

    ngOnInit() { } //nothing has to happen in ng as we are creating new user

  /**
   * Create a user
   */
  createUser() {
    this.successMessage = '';
    this.errorMessage   = '';

    this.service.createUser(this.user)
      .subscribe(user => {
        this.successMessage = 'User was created!';
        console.log('user was created');

        // navigate back to the users page
        this.router.navigate(['/users']);
      })
  }

}