import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import { IonicModule } from '@ionic/angular';
import { CommonComponentsModule } from 'src/app/common/components/common-components.module';


@NgModule({
  declarations: [LoginPage],
  imports: [
    CommonModule,
    IonicModule,
    CommonComponentsModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
