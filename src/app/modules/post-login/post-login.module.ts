import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostLoginRoutingModule } from './post-login-routing.module';
import { PostLoginPage } from './post-login.page';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [PostLoginPage],
  imports: [
    CommonModule,
    IonicModule,
    PostLoginRoutingModule
  ]
})
export class PostLoginModule { }
