import { Component, OnInit } from '@angular/core';
import { JwtService } from '../shared/jwt/jwt.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userName = localStorage.getItem('currentUserName');
  userLastName = localStorage.getItem('currentUserLastName');
  userJob = localStorage.getItem('currentUserJob');

  constructor(private jwtService: JwtService,) { }

  ngOnInit() {
  }

}
