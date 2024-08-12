import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'routingMT3';

  isLogIn : boolean = false;

  private _authService = inject(AuthService);

  ngOnInit(): void {
    this._authService.logInStatesub$
        .subscribe((res: boolean)=>{
          this.isLogIn = res
        })
  }
}
