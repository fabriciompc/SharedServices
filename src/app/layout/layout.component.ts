import { UserService } from './../users/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

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
