import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [LoginPage],
  imports: [
    CommonModule,
    IonicModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
