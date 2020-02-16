import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  public users: Array<User>;
  public subscription = new Subscription();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.subscription.add(this.userService.userRepo$.subscribe(users => this.users = users));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
