import { Injectable } from '@angular/core';
import { Iusers } from '../module/users.interface';
import { Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersArr : Array<Iusers> = [
    {
      userName: 'Jhon',
      userId: '1',
      userRole: 'admin',
      userEmail: 'jhon@example.com',
      userPhone: '1234567890',
      userAddress: '123 Main St'
    },
    {
      userName: 'Jon',
      userId: '2',
      userRole: 'buyer',
      userEmail: 'jon@example.com',
      userPhone: '9876543210',
      userAddress: '456 Elm St'
    },
    {
      userName: 'May',
      userId: '3',
      userRole: 'admin',
      userEmail: 'may@example.com',
      userPhone: '5551234567',
      userAddress: '789 Oak St'
    },
    {
      userName: 'Emily',
      userId: '4',
      userRole: 'buyer',
      userEmail: 'emily@example.com',
      userPhone: '1112223333',
      userAddress: '321 Pine St'
    },
    {
      userName: 'David',
      userId: '5',
      userRole: 'admin',
      userEmail: 'david@example.com',
      userPhone: '4445556666',
      userAddress: '901 Maple St'
    },
    {
      userName: 'Sarah',
      userId: '6',
      userRole: 'buyer',
      userEmail: 'sarah@example.com',
      userPhone: '7778889999',
      userAddress: '234 Cedar St'
    }
  ]

  constructor(
    private _router : Router,
    private _snackbar : SnackbarService
  ) { }

  fetchAllUsers(): Array<Iusers>{
    return this.usersArr
  }

  getUserDetails(id: string): Iusers | undefined{
    return this.usersArr.find(user => user.userId === id)
  }

  addUser(user : Iusers){
      this.usersArr.push(user);
      this._router.navigate(['/users']);
      this._snackbar.openSnackBar(`The user ${user.userName} is added successfully!!!!`)
  }

  removeUser(userId: string){
      let getIndex = this.usersArr.findIndex(user => user.userId === userId);
      let removeUser = this.usersArr[getIndex];
      this.usersArr.splice(getIndex, 1);
      this._router.navigate(['/users']);
      this._snackbar.openSnackBar(`The user ${removeUser.userName} is removed successfully!!!!`)
  }

  updateUser(updObj: Iusers){
    let getIndex = this.usersArr.findIndex(user => user.userId === updObj.userId);
    let updatedUser = this.usersArr[getIndex];
    this.usersArr[getIndex] = updObj;
    this._router.navigate(['/users']);
    this._snackbar.openSnackBar(`The user ${updatedUser.userName} is updated to ${updObj.userName} successfully!!!!`)
  }
}
