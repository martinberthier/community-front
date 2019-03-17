import { Component, OnInit } from '@angular/core';
import  { SigninService} from '../services/signinService';
import { Router } from '@angular/router';
@Component({
  selector: 'form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {
  public password: string;
  public email : string;
  public job : string;
  public lastname : string;
  public name : string;
  constructor(private _signingSerivce:SigninService, private _router: Router) { }

  ngOnInit() {
  }

  public register()  {
    this._signingSerivce.register(this.email, this.lastname, this.name, this.password, this.password).subscribe((data: string) => {
      this._router.navigateByUrl('/home');
    },
  );

  }
}
