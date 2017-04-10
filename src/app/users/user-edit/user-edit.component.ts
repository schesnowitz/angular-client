import { Component, OnInit } from '@angular/core';
import { User } from "app/shared/models/user";
import { UserService } from "app/shared/services/user.service";
import { ActivatedRoute } from "@angular/router";


@Component({
    moduleId: module.id,
    selector: 'user-edit',
    templateUrl: 'user-edit.component.html',
    styleUrls: ['user-edit.component.css']
})
export class UserEditComponent implements OnInit{
    user: User;
    successMessage: string = '';
    errorMessage: string = '';

 constructor(private service: UserService, private route: ActivatedRoute) {}

 ngOnInit() {
     //grab the user
     let id = this.route.snapshot.params['id'];
     this.service.getUser(id).subscribe(user => this.user = user);
 }

 //update the user....

 updateUser() {
    this.successMessage = '';
    this.errorMessage = '';
    this.service.updateUser(this.user)
    .subscribe(
			user => {
				this.successMessage = 'The User was updated!';
				console.warn('user was updated');
    },
		err => {
			//this.errorMessage = 'ERROR - User could not be updated'; //show custom text
			this.errorMessage = err; //show api error
			console.error(err);
		}
	);
 }
}
