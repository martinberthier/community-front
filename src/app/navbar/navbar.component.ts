import { Component, OnInit } from '@angular/core';
import { JwtService } from './../shared/jwt/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private jwtService: JwtService, private router: Router) { }

  ngOnInit() {
  }
  
  public logout(){
    this.jwtService.logout();
    this.router.navigate(['/']);
    location.reload();
  }

}
