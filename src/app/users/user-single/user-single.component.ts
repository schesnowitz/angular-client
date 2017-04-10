import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"; //gets info from the route
import { User } from "app/shared/models/user";
import { UserService } from "app/shared/services/user.service";

@Component({
    moduleId: module.id,
    selector: 'user-single',
    templateUrl: 'user-single.component.html',
    styleUrls: ['user-single.component.css']
})
export class UserSingleComponent {
    user: User;
    constructor(private route: ActivatedRoute,
                private service: UserService) { }

    ngOnInit() {
// grab the id from route

    let id = this.route.snapshot.params['id'];
// use the UserService to get the User

    this.service.getUser(id)
        .subscribe(user => this.user = user);
    }
}
