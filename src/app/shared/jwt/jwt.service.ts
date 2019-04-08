
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { User } from '../bean/user';
import { BehaviorSubject, Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class JwtService {
  

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}


login(email: string, password: string) {
  return this.http.post<any>('//localhost:8080/ano/jwt', { email, password }, httpOptions)
      .pipe(map(user => {
          // login successful if there's a jwt token in the response
          if (user && user.token) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              // localStorage.setItem('currentUser', JSON.stringify(user));
              localStorage.setItem('currentUserToken', user.token);
              localStorage.setItem('currentUserName', user.user.name);
              localStorage.setItem('currentUserLastName', user.user.lastname);
              localStorage.setItem('currentUserJob', user.user.job);
              localStorage.setItem('currentUserId', user.user.id);
              this.currentUserSubject.next(user);
              console.log(user);
          }
          // console.log(user.json())
          return user;
      }));
}

public loggedIn(){
  return localStorage.getItem('currentUserToken');
}

  public logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUserToken');
    localStorage.removeItem('currentUserName');
    localStorage.removeItem('currentUserLastName');
    localStorage.removeItem('currentUserJob');
    localStorage.removeItem('currentUserId');
    this.currentUserSubject.next(null);
  }

// public get loggedIn(): boolean{
//   return localStorage.getItem('currentUserToken') !==  null;
//   }
// pour accéder aux valeurs du header : sessionStorage.getItem


//avec token en réponse au lieu de user
// login(email: string, password: string) {
//   return this.http.post<any>('//localhost:8080/ano/jwt', { email, password })
//       .subscribe(token => {
//           // login successful if there's a jwt token in the response
         
//               // store user details and jwt token in local storage to keep user logged in between page refreshes
//               localStorage.setItem('token', token);
//               console.log(token)
//           }
//       );
// }
// login(email:string, password:string) {
//   console.log(email, password)
//   return this.http.post<{access_token:  string}>('//localhost:8080/ano/jwt', {email, password}).pipe(tap(res => {
//   localStorage.setItem('access_token', res.access_token);
//   console.log( res.access_token)
// }))
// }

//B
//   login(email:string, password:string) {
//     return this.httpClient.post<{access_token:  string}>
//     ('//localhost:8080/ano/jwt', {email, password})
//     .pipe(tap(res => {
//     localStorage.setItem('access_token', res.access_token);
//   }))
// }

//A
// login(credentials) {
//   console.log(credentials)
//   return this.httpClient.post<{token:  string}>('//localhost:8080/ano/jwt', credentials)
//   .pipe(tap(response => {
//     console.log(response)
//       localStorage.setItem('token', response.token)
//       return true;
//   }))
// }


// login(credentials) {
//   return this.httpClient.post('//localhost:8080/community/ano/jwt', JSON.stringify(credentials))
//   .map(response => {
//     let result = response.json();
//     if (result && result.token) {
//       localStorage.setItem('token', result.token)
//       return true;
//     }
//     return false;
//   })
// }

// register(email:string, password:string) {
//   return this.httpClient.post<{access_token: string}>
//   ('http://www.your-server.com/auth/register', {email, password})
//   .pipe(tap(res => {
//   this.login(email, password)
//   }))
// }

// logout() {
//   localStorage.removeItem('access_token');
//   }



}
