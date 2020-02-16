import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {

  private users: Array<User> = new Array<User>();

  private usersSource = new BehaviorSubject(this.users);

  userRepo$ = this.usersSource.asObservable();

  constructor() { }

  addUser(user: User) {
    this.users.push(user);
    this.usersSource.next(this.users);
    console.log(this.userRepo$);
  }
}
