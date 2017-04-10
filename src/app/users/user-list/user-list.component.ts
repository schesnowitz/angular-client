import { Component, OnInit } from '@angular/core';
import { UserService } from "app/shared/services/user.service";
import { User } from 'app/shared/models/user';


@Component({
    moduleId: module.id,
    selector: 'user-list',
    templateUrl: 'user-list.component.html',
    styleUrls: ['user-list.component.css']
})
export class UserListComponent implements OnInit {

    users: User[];


    constructor(private service: UserService) {}

  ngOnInit() { 
    this.service.getUsers()
      .subscribe(users => this.users = users);   

	}
}
