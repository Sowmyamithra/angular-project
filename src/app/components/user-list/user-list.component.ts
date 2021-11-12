import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users: User[] = [] as User[];
  public errMsg: string | undefined = undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }

  public getUsersData(): void {
    this.userService.getUsers()
      .subscribe((data) => {
        this.users = data;
      },(err) => {
        this.errMsg = err;
      });
  }

}