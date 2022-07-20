import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1-search-cart',
  templateUrl: './tab1-search-cart.component.html',
  styleUrls: ['./tab1-search-cart.component.scss']
})
export class Tab1SearchCartComponent {
  constructor(private router: Router) {}

  onCartClick(): void {
    this.router.navigate(['cart']);
  }
}
