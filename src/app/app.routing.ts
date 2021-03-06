import { ModuleWithProviders} from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "app/users/users-component/users/users.component";
import { UserListComponent } from "app/users/user-list/user-list.component";
import { UserSingleComponent } from "app/users/user-single/user-single.component";
import { UserEditComponent } from "app/users/user-edit/user-edit.component";
import { UserCreateComponent } from "app/users/user-create/user-create.component";
import { LoginComponent } from "app/login/login.component";


export const routes: Routes = [
  { path: '', 
    redirectTo: 'users', 
    pathMatch: 'full' 
  },
  { path: 'login',
    component: LoginComponent
  },
  { path: 'users', 
    component: UsersComponent,
    children:
      [
        { 
          path: '', 
          component: UserListComponent
        },
        { path: 'create',
          component: UserCreateComponent
        },
        { path: ':id',
          component: UserSingleComponent
        },
        { path: ':id/edit',
          component: UserEditComponent
        }
      ] 
  }
];




export const routing: ModuleWithProviders = RouterModule.forRoot(routes);