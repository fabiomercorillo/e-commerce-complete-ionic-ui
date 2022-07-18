import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab1-banner-item',
  templateUrl: './tab1-banner-item.component.html',
  styleUrls: ['./tab1-banner-item.component.scss'],
})
export class Tab1BannerItemComponent {
  @Input() img: string;
  @Input() title: string;
  @Input() subTitle: string;
}
