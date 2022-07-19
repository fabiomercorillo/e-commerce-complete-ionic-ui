import { Component, OnInit } from '@angular/core';
import { IProductItem } from '../../../../../common/models/i-product-item';
import SwiperCore from 'swiper';

@Component({
  selector: 'app-tab1-slider1',
  templateUrl: './tab1-slider1.component.html',
  styleUrls: ['./tab1-slider1.component.scss'],
})
export class Tab1Slider1Component implements OnInit {
  slider1: Array<IProductItem>;

  ngOnInit(): void {
    this.slider1 = [
      {
        img: '../../../../assets/images/slider/1.png',
        description: 'Wireless Controller per PS5',
        price: '64.99 €',
        like: true,
        images: [
          'asset/products/1/1.png',
          'asset/products/1/2.png',
          'asset/products/1/3.png',
          'asset/products/1/4.png'
        ]
      },
      {
        img: '../../../../assets/images/slider/2.png',
        description: 'Nike Sport White - Pantaloncini uomo',
        price: '50.5 €',
        like: true,
        images: [
          'asset/products/2/1.png',
        ]
      },
      {
        img: '../../../../assets/images/slider/3.png',
        description: 'Guanti XC Omega - Per palestra',
        price: '36.55 €',
        like: true,
        images: [
          'asset/products/3/1.png',
        ]
      },
      {
        img: '../../../../assets/images/slider/4.png',
        description: 'Cuffie Logitech - Per gaming',
        price: '20.2 €',
        like: true,
        images: [
          'asset/products/4/1.png',
        ]
      }
    ];
  }

}
