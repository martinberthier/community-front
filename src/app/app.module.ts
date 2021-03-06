import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormRegisterComponent } from './form-register/form-register.component';
import { CategoryComponent } from './category/category.component';

import { HttpClientModule } from '@angular/common/http';
import { PostListComponent } from './post-list/post-list.component';
import { PostEditComponent } from './post-edit/post-edit.component'
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { PostListByCategoryComponent } from './post-list-by-category/post-list-by-category.component';

//service
import {SigninService} from './services/signinService';
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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SigninService],
  bootstrap: [AppComponent],

})
export class AppModule { }
