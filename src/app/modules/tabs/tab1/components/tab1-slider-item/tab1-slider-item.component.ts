import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab1-slider-item',
  templateUrl: './tab1-slider-item.component.html',
  styleUrls: ['./tab1-slider-item.component.scss'],
})
export class Tab1SliderItemComponent {
  @Input() img: string; // image path
  @Input() description: string;
  @Input() price: string;
  @Input() liked: boolean;
}
