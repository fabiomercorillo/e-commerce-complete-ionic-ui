import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnBoardingRoutingModule } from './on-boarding-routing.module';
import { OnBoardingPage } from './on-boarding.page';
import { IonicModule } from '@ionic/angular';
import { CommonComponentsModule } from 'src/app/common/components/common-components.module';


@NgModule({
  declarations: [OnBoardingPage],
  imports: [
    CommonModule,
    IonicModule,
    CommonComponentsModule,
    OnBoardingRoutingModule
  ]
})
export class OnBoardingModule { }
