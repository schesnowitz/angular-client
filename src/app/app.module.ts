import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UserListComponent } from "app/users/user-list/user-list.component";
import { routing } from "app/app.routing";

import { UserService } from "app/shared/services/user.service";
import { UsersComponent } from "app/users/users-component/users/users.component";
import { UserSingleComponent } from "app/users/user-single/user-single.component";
import { UserEditComponent } from "app/users/user-edit/user-edit.component";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';






@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserListComponent,
    UserSingleComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
