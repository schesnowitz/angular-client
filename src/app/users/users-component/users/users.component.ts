import { Component, OnInit } from '@angular/core';
import { UserService } from "app/shared/services/user.service";

@Component({
    moduleId: module.id,
    selector: 'users',
    templateUrl: 'users.component.html',
    styleUrls: ['users.component.css']
})
export class UsersComponent implements OnInit {
	successMessage: string = '';
	deletedMessage: string = '';
    constructor(private service: UserService) {}

    ngOnInit() { 
			this.service.userCreated$.subscribe(user => {
				this.successMessage = `${user.name} has been created`
				this.clearMessages();
			});

			this.service.userDeleted$.subscribe(() => {
				this.deletedMessage = `The has been created`
				this.clearMessages();
			});
    }

		clearMessages() {
			setTimeout(() =>{
				this.successMessage = '';
				this.deletedMessage = '';
			}, 5500);
		}
    
}
