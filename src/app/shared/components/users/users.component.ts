import { Component, OnInit } from '@angular/core';
import { Iusers } from '../../module/users.interface';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userData !: Array<Iusers>;

  constructor(
    private _usersService : UsersService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.userData = this._usersService.fetchAllUsers();

    this._router.navigate(['users', this.userData[0].userId],{
      queryParams: {userRole : this.userData[0].userRole},
      queryParamsHandling: 'merge'
    })
  }

}
