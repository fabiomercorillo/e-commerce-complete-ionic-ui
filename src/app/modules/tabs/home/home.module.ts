import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { Tab1HeaderComponent } from './components/tab1-header/tab1-header.component';
import { Tab1BannerComponent } from './components/tab1-banner/tab1-banner.component';
import { Tab1SliderItemComponent } from './components/tab1-slider-item/tab1-slider-item.component';
import { Tab1Slider1Component } from './components/tab1-slider1/tab1-slider1.component';
import { SwiperModule } from 'swiper/angular';
import { Tab1Slider2Component } from './components/tab1-slider2/tab1-slider2.component';
import { Tab1Slider3Component } from './components/tab1-slider3/tab1-slider3.component';
import { Tab1BannerItemComponent } from './components/tab1-banner-item/tab1-banner-item.component';
import { Tab1MenusComponent } from './components/tab1-menus/tab1-menus.component';
import { Tab1CircularButtonComponent } from './components/tab1-circular-button/tab1-circular-button.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    SwiperModule
  ],
  declarations: [
    HomePage,
    Tab1HeaderComponent,
    Tab1BannerComponent,
    Tab1Slider1Component,
    Tab1SliderItemComponent,
    Tab1Slider2Component,
    Tab1BannerItemComponent,
    Tab1Slider3Component,
    Tab1MenusComponent,
    Tab1CircularButtonComponent
  ]
})
export class Tab1PageModule {}
