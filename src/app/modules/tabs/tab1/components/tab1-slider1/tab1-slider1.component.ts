import { Component, OnInit } from '@angular/core';
import { ITab1SliderItem } from '../../models/i-tab1-slider-item';
import SwiperCore from 'swiper';

@Component({
  selector: 'app-tab1-slider1',
  templateUrl: './tab1-slider1.component.html',
  styleUrls: ['./tab1-slider1.component.scss'],
})
export class Tab1Slider1Component implements OnInit {
  slider1: Array<ITab1SliderItem>;

  ngOnInit(): void {
    this.slider1 = [
      {
        img: '../../../../assets/images/slider/1.png',
        description: 'Wireless Controller per PS5',
        price: '64.99 €',
        like: true
      },
      {
        img: '../../../../assets/images/slider/2.png',
        description: 'Nike Sport White - Pantaloncini uomo',
        price: '50.5 €',
        like: true
      },
      {
        img: '../../../../assets/images/slider/3.png',
        description: 'Guanti XC Omega - Per palestra',
        price: '36.55 €',
        like: true
      },
      {
        img: '../../../../assets/images/slider/4.png',
        description: 'Cuffie Logitech - Per gaming',
        price: '20.2 €',
        like: true
      }
    ];
  }

}
