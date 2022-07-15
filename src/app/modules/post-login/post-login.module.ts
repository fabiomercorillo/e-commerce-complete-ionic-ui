import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostLoginRoutingModule } from './post-login-routing.module';
import { PostLoginPage } from './post-login.page';
import { IonicModule } from '@ionic/angular';
import { CommonComponentsModule } from 'src/app/common/components/common-components.module';


@NgModule({
  declarations: [PostLoginPage],
  imports: [
    CommonModule,
    IonicModule,
    CommonComponentsModule,
    PostLoginRoutingModule
  ]
})
export class PostLoginModule { }
