import { Component, Input } from '@angular/core';
import { ICartItem } from '../../models/i-cart-item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() item: ICartItem;
}
