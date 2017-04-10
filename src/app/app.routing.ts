import { ModuleWithProviders} from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "app/users/users-component/users/users.component";
import { UserListComponent } from "app/users/user-list/user-list.component";
import { UserSingleComponent } from "app/users/user-single/user-single.component";
import { UserEditComponent } from "app/users/user-edit/user-edit.component";


export const routes: Routes = [
  { path: '', 
    redirectTo: 'users', 
    pathMatch: 'full' 
  },
  { path: 'users', 
    component: UsersComponent,

    children:
      [
        { 
          path: '', 
          component: UserListComponent
        },
    //     { path: 'create',
    //       component: UserCreateComponent
    //     },
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