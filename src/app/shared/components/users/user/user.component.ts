import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iusers } from 'src/app/shared/module/users.interface';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userId !: string;
  userObj !: Iusers | undefined;

  constructor(
    private _routes : ActivatedRoute,
    private _usersService : UsersService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.userParam()
  }

  gotoEditUser(){
    this._router.navigate(['editUser'],{
      relativeTo: this._routes,
      queryParamsHandling: 'preserve'
    })
  }

  onRemoveUser(){
      if (this.userId) {
        this._usersService.removeUser(this.userId);
      }
  }

  userParam(){
    this._routes.params
      .subscribe((params:Params)=>{
        this.userId = params['userId']
        if (this.userId) {
          this.userObj = this._usersService.getUserDetails(this.userId)
        }
      })
  }
}
