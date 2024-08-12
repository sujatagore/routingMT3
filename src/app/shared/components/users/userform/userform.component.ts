import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Iusers } from 'src/app/shared/module/users.interface';
import { UsersService } from 'src/app/shared/services/users.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent implements OnInit {

  userForm !: FormGroup;
  isinEditMode : boolean = false;
  userRole !: 'admin' | 'buyer';
  userId !: string;
  userObj !: Iusers | undefined;

  constructor(
    private _usersService : UsersService,
    private _routes : ActivatedRoute,
    private _uuidService : UuidService
  ) { }

  ngOnInit(): void {
    this.createUserForm();
    this.patchUser();
    this.manageQueryParams();
  }

  createUserForm(){
    this.userForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      
      userRole: new FormControl(null, [Validators.required]),

      userEmail: new FormControl(null, [Validators.required]),

      userPhone: new FormControl(null, [Validators.required]),

      userAddress: new FormControl(null, [Validators.required])
    })
  }

  onUserAdd(){
    if (this.userForm.valid) {
      let newUser : Iusers = {...this.userForm.getRawValue(), userId: this._uuidService.uuid()};
      this._usersService.addUser(newUser);
    }
  }

  patchUser(){
    this.userId = this._routes.snapshot.params['userId'];
    if (this.userId) {
      this.isinEditMode = true;
      this.userObj = this._usersService.getUserDetails(this.userId)!;
      this.userForm.patchValue(this.userObj);
    } else{
      this.isinEditMode = false
    }
  }

  manageQueryParams(){
    this.userRole = this._routes.snapshot.queryParams['userRole'];
    if (this.userRole) {
      if (this.userRole = 'buyer') {
        this.userForm.disable();
      } else {
        this.userForm.enable()
      }
    }
  }

  onUpdateUser(){
      if (this.userForm.valid) {
        let updUserObj = {...this.userForm.value, userId : this.userId};
        this._usersService.updateUser(updUserObj);
      }
  }
}
