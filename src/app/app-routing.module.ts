import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormRegisterComponent } from './form-register/form-register.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'post-list',
    component: PostListComponent
  },
  {
    path: 'post-add',
    component: PostEditComponent
  },
  {
    path: 'post-edit/:id',
    component: PostEditComponent
  },
  {
    path: 'form-login',
    component: FormLoginComponent
  },
  {
    path: 'form-register',
    component: FormRegisterComponent
  },
  // {
  //   path: '**',
  //   component: NotFoundComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
