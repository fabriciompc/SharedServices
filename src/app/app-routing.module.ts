import { UserListComponent } from './users/user-list/user-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersRoutes } from './users/users.routes';


const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  },
  ...UsersRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
