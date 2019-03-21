import { Component } from '@angular/core';
import { User } from './shared/bean/user';
import { Router } from '@angular/router';
import { JwtService } from './shared/jwt/jwt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'community';
  currentUser: User;

  constructor(
    private router: Router,
    private jwtService: JwtService
) {
    this.jwtService.currentUser.subscribe(x => this.currentUser = x);
}

logout() {
    this.jwtService.logout();
    this.router.navigate(['/form-login']);
}

}
