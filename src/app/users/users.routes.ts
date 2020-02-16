import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { Component } from '@angular/core';
export const UsersRoutes = [
  {
    path: 'users',
    children: [
      {
        path: 'add',
        component: UserAddComponent
      },
      {
        path: 'list',
        component: UserListComponent
      }
    ]
  }
];
