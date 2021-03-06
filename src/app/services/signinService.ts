import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from '../shared/bean/user';


@Injectable()
export class SigninService {

  private actionUrl: string;

  constructor(private http: HttpClient) {
    this.actionUrl = '//localhost:8080/community/users/';
  }

  public register(email: string, password: string, lastname: string, name: string, job: string) {
    const newUser: User = new User();
    newUser.name = name;
    newUser.lastname = lastname;
    newUser.email = email;
    newUser.password = password;
    newUser.job = job
    return this.http.post(this.actionUrl, newUser);

  }
}
