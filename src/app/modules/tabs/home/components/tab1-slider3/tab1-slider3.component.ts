import { Component, OnInit } from '@angular/core';
import { IProductItem } from '../../../../../common/models/i-product-item';

@Component({
  selector: 'app-tab1-slider3',
  templateUrl: './tab1-slider3.component.html',
  styleUrls: ['./tab1-slider3.component.scss'],
})
export class Tab1Slider3Component {
  slider: Array<IProductItem> = [{
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

