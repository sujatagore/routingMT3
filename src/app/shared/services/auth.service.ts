import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class AuthService{
    userLogInState : boolean = false;
    logInStatesub$ : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

    constructor(
        private _router: Router
    ){ }

    isAuthenticated(){
        return new Promise<boolean>((resolve, reject) =>{
            setTimeout(() => {
                if (localStorage.getItem('token')) {
                    this.userLogInState = true;
                } else {
                    this.userLogInState = false;
                    this._router.navigate([''])
                }

                this.logInStatesub$.next(this.userLogInState);
                resolve(this.userLogInState)
            }, 500);
        })
    }

    logInApp(email : string, pass: string){

        if (email === 'jhon@gmail.com' && pass === 'Pass@123') {
            localStorage.setItem('userRole', 'buyer');
            this.userLogInState = true;
            localStorage.setItem('token', 'JWT Token store in LS');
            this._router.navigate(['home'])

        } else if (email === 'jun@gmail.com' && pass === 'Pass@123') {
            localStorage.setItem('userRole', 'admin');
            this.userLogInState = true;
            localStorage.setItem('token', 'JWT Token store in LS');
            this._router.navigate(['home'])

        } else if (email === 'may@gmail.com' && pass === 'Pass@123') {
            localStorage.setItem('userRole', 'sa');
            this.userLogInState = true;
            localStorage.setItem('token', 'JWT Token store in LS');
            this._router.navigate(['home'])
            
        } else{
            alert(`Invalid Email ID or Password !!!!`)
        }
    }

    logOutApp(){
        this.userLogInState = false;
        localStorage.removeItem('token');
        localStorage.removeItem('userRole');
        this.logInStatesub$.next(false);
        this._router.navigate(['']);
    }
}