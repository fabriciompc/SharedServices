import { UserService } from './../users/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public users: Array<User>;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.userRepo$.subscribe(users => this.users = users);
  }
}
