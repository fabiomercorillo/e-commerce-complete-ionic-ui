import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnBoardingRoutingModule } from './on-boarding-routing.module';
import { OnBoardingPage } from './on-boarding.page';


@NgModule({
  declarations: [OnBoardingPage],
  imports: [
    CommonModule,
    OnBoardingRoutingModule
  ]
})
export class OnBoardingModule { }
