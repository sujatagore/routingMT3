import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userRole !: string
  constructor(
    private _authService : AuthService
  ) { }

  ngOnInit(): void {
    this.userRole = localStorage.getItem('userRole')!;
  }

}
