import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { Tab1HeaderComponent } from './components/tab1-header/tab1-header.component';
import { Tab1BannerComponent } from './components/tab1-banner/tab1-banner.component';
import { Tab1SliderItemComponent } from './components/tab1-slider-item/tab1-slider-item.component';
import { Tab1Slider1Component } from './components/tab1-slider1/tab1-slider1.component';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    SwiperModule
  ],
  declarations: [
    Tab1Page,
    Tab1HeaderComponent,
    Tab1BannerComponent,
    Tab1Slider1Component,
    Tab1SliderItemComponent
  ]
})
export class Tab1PageModule {}
