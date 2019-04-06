import { JwtInterceptor } from './shared/helpers/jwt.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormRegisterComponent } from './form-register/form-register.component';
import { CategoryComponent } from './category/category.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostListComponent } from './post-list/post-list.component';
import { PostEditComponent } from './post-edit/post-edit.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { PostListByCategoryComponent } from './post-list-by-category/post-list-by-category.component';

//service
import {SigninService} from './services/signinService';
import { ErrorInterceptor } from './shared/helpers/error.interceptor';
import { ArraySortPipePipe } from './shared/arraySortPipe/array-sort-pipe.pipe';
import { Navbar2Component } from './navbar2/navbar2.component';
import { FooterComponent } from './footer/footer.component';
import { Footer2Component } from './footer2/footer2.component';
@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    FormRegisterComponent,
    CategoryComponent,
    PostListComponent,
    PostEditComponent,
    NavbarComponent,
    HomeComponent,
    SearchbarComponent,
    PostListByCategoryComponent,
    ArraySortPipePipe,
    Navbar2Component,
    FooterComponent,
    Footer2Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter: function  tokenGetter() {
    //          return     localStorage.getItem('token');},
    //     whitelistedDomains: ['localhost:4200'],
    //     // blacklistedRoutes: ['http://localhost:4200/auth/login']
    //   }
    // })
  ],
  providers: [
    SigninService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
 

})
export class AppModule { }
