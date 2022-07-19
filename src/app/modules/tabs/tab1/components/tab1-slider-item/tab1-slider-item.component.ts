import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

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
  @Input() images: Array<string>;

  constructor(private router: Router) {}

  onClick(): void {
    this.router.navigate(['pdp'], { queryParams: {
      img: this.img,
      description: this.description,
      price: this.price,
      liked: this.liked,
      images: this.images
    }});
  }
}
