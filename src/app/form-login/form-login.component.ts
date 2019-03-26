import { JwtService } from './../shared/jwt/jwt.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
  invalidLogin: boolean;
  invalidForm: boolean;
  
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private jwtService: JwtService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });

  // reset login status
  this.jwtService.logout();
}

// convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.loginForm.invalid) {
    this.invalidForm = true;
      return;
  }
  this.jwtService.login(this.f.email.value, this.f.password.value)
      .subscribe(
          data => {
              this.router.navigate(['/']);
              console.log(data);
          },
          error => {
              this.error = error;
              this.invalidLogin = true;
          });
  }
}
