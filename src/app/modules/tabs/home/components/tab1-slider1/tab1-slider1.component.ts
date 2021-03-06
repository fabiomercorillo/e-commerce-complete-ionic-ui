import { Component, OnInit } from '@angular/core';
import { IProductItem } from '../../../../../common/models/i-product-item';
import SwiperCore, { SwiperOptions, FreeMode } from 'swiper';

SwiperCore.use([FreeMode]);
@Component({
  selector: 'app-tab1-slider1',
  templateUrl: './tab1-slider1.component.html',
  styleUrls: ['./tab1-slider1.component.scss'],
})
export class Tab1Slider1Component implements OnInit {
  slider1: Array<IProductItem>;
  optsSlider: SwiperOptions = {
    slidesPerView: 2.2,
    spaceBetween: 23,
    freeMode: {
      enabled: true,
    },
  };

  ngOnInit(): void {
    this.slider1 = [
      {
        img: '../../../../assets/images/slider/1.png',
        description: 'Wireless Controller per PS5',
        price: '64.99 €',
        like: true,
        images: [
          'assets/images/products/1/1.png',
          'assets/images/products/1/2.png',
          'assets/images/products/1/3.png',
          'assets/images/products/1/4.png',
        ],
        rate: 4.8,
      },
      {
        img: '../../../../assets/images/slider/2.png',
        description: 'Nike Sport White - Pantaloncini uomo',
        price: '50.5 €',
        like: false,
        images: ['assets/images/products/2/1.png'],
        rate: 3.1,
      },
      {
        img: '../../../../assets/images/slider/3.png',
        description: 'Guanti XC Omega - Per palestra',
        price: '36.55 €',
        like: true,
        images: ['assets/images/products/3/1.png'],
        rate: 4.9,
      },
      {
        img: '../../../../assets/images/slider/4.png',
        description: 'Cuffie Logitech - Per gaming',
        price: '20.2 €',
        like: true,
        images: ['assets/images/products/4/1.png'],
        rate: 3.7,
      },
    ];
  }
}
