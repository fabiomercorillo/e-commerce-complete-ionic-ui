import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { OnBoardingRoutingModule } from './on-boarding-routing.module';
import { OnBoardingPage } from './on-boarding.page';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [OnBoardingPage],
  imports: [
    CommonModule,
    IonicModule,
    SwiperModule,
    OnBoardingRoutingModule
  ]
})
export class OnBoardingModule { }
