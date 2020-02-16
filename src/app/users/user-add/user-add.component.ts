import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  public name: string;
  public role: string;
  public form: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      role: ['', [Validators.required]],
    });
  }

  onSubmit() {
    var user = new User({
      name: this.form.get('name').value,
      role: this.form.get('role').value
    });

    console.log(user);

    this.userService.addUser(user);

    this.router.navigate(['./users/list']);
  }

}
