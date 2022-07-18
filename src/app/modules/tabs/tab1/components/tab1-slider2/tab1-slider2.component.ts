import { Component, OnInit } from '@angular/core';
import { ITab1Banner } from '../../models/i-tab1-banner';

@Component({
  selector: 'app-tab1-slider2',
  templateUrl: './tab1-slider2.component.html',
  styleUrls: ['./tab1-slider2.component.scss'],
})
export class Tab1Slider2Component implements OnInit {
  banners: Array<ITab1Banner>;

  ngOnInit(): void {
    this.banners = [{
        img: '../../../../assets/images/banner/1.png',
        title: 'Smartphone',
        subTitle: '18 Brands'
      }, {
        img: '../../../../assets/images/banner/1.png',
        title: 'Fashion',
        subTitle: '24 Brands'
      }
    ];
  }

}
