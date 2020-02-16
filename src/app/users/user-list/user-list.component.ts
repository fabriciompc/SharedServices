import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public users: Array<User>;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.userRepo$.subscribe(users => this.users = users);
  }

}
