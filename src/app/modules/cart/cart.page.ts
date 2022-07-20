import { Component } from '@angular/core';
import { ICartItem } from './models/i-cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {
  itemsInCart: Array<ICartItem> = [{
      img: 'assets/images/slider/1.png',
      name: 'Wireless Controller per PS5',
      price: 64.99,
      quantity: 2
    },
    {
      img: 'assets/images/slider/2.png',
      name: 'Nike Sport White - Pantaloncini uomo',
      price: 50.5,
      quantity: 1
    },
    {
      img: 'assets/images/slider/4.png',
      name: 'Cuffie Logitech - Per gaming',
      price: 20.2,
      quantity: 1
    }
  ];
}
