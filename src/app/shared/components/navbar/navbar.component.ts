import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  userRole !: string

  constructor(
    private _authService : AuthService
  ) { }

  ngOnInit(): void {
    this.userRole = localStorage.getItem('userRole')!;
  }

  onLogOut(){
    this._authService.logOutApp()
  }
}
