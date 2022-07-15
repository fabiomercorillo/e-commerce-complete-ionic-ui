import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostLoginRoutingModule } from './post-login-routing.module';
import { PostLoginPage } from './post-login.page';


@NgModule({
  declarations: [PostLoginPage],
  imports: [
    CommonModule,
    PostLoginRoutingModule
  ]
})
export class PostLoginModule { }
